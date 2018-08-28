package com.lab409.crowdingsourcing;


import com.lab409.crowdingsourcing.dto.SimpleProjectDto;
import com.lab409.crowdingsourcing.entity.DevEnrollInfo;
import com.lab409.crowdingsourcing.entity.DevInfo;
import com.lab409.crowdingsourcing.entity.Project;
import com.lab409.crowdingsourcing.repository.DevEnrollInfoRepository;
import com.lab409.crowdingsourcing.repository.DevInfoRepository;
import com.lab409.crowdingsourcing.repository.ProjectRepository;
import com.lab409.crowdingsourcing.service.ProjectService;
import com.lab409.crowdingsourcing.util.ResJsonTemplate;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.LinkedList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProjectServiceTest {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private DevEnrollInfoRepository devEnrollInfoRepository;

    @Autowired
    private DevInfoRepository devInfoRepository;

    @Test
    @Rollback(true)
    public void projectServiceTestSuccess(){

        //getAllProject
        Assert.assertEquals(projectRepository.findAll().toString(), projectService.getAllproject().getResult().toString());
        Assert.assertEquals("200", projectService.getAllproject().getStatus());

        //addProject
        Assert.assertEquals("200", projectService.addProject(1.2, 30003, 3003231,
                "idon'tknow", "OK", "cpx",
                "xxxx", "p1").getStatus());
        List<Project> pl = projectRepository.findByUsername("cpx");
        boolean flag = false;
        for (Project p: pl) {
            if (p.getProjectName().equals("p1") && p.getAddress().equals("idon'tknow") &&
                    p.getCost() == 1.2 && p.getWarrantyCycle() == 3003231)
                flag = true;
        }
        Assert.assertEquals(true, flag);

        //addEnrollInfo
        DevEnrollInfo devEnrollInfo = new DevEnrollInfo("cpx", 1L);
        Assert.assertEquals("200", projectService.addEnrollInfo(devEnrollInfo).getStatus());
        List<DevEnrollInfo> devEnrollInfos = devEnrollInfoRepository.findByProjectIdAndUsername(1L, "cpx");
        flag = false;
        for (DevEnrollInfo d : devEnrollInfos) {
            if (d.getUsername().equals("cpx") && d.getProjectId() == 1L)
                flag = true;
        }
        Assert.assertEquals(true, flag);

        //deleteEnrollInfo
        List<DevEnrollInfo> list = devEnrollInfoRepository.findByProjectIdAndUsername(1L, "cpx");
        flag = false;
        try{
            for (int i = 0; i < list.size(); i++) {
                devEnrollInfoRepository.delete(list.get(i));
            }
            flag = true;
        }catch (Exception e){
            flag = false;
        }
        Assert.assertEquals(true, flag);

        //getEnrollCountByProjectId
        ResJsonTemplate res = new ResJsonTemplate<>("200", devEnrollInfoRepository.findByProjectId(1L).size());
        Assert.assertEquals(res.getResult(), projectService.getEnrollCountByProjectId(1L).getResult());

        //getEnrollListByDevUsername
        res = new ResJsonTemplate<>("200", projectRepository.searchEnrollProjectByUsername("cpx"));
        Assert.assertEquals(res.getResult(), projectService.getEnrollListByDevUsername("cpx").getResult());

        //getProjectListbyusername
        List<Project> projects = projectRepository.findByUsername("cpx");
        List<SimpleProjectDto> simpleProjectDtos = new LinkedList<>();
        for (Project p: projects) {
            simpleProjectDtos.add(new SimpleProjectDto(p.getprojectId(),p.getProjectName(),p.getProjectType(),p.getProjectState()));
        }
        res = new ResJsonTemplate<>("200", simpleProjectDtos);
        Assert.assertEquals(res.getResult().toString(), projectService.getProjectListbyusername("cpx").getResult().toString());

        //getProjectDetailbyUsernameId
        res = new ResJsonTemplate<>("200", projectRepository.findByProjectIdAndUsername(1L, "cpx"));
        Assert.assertEquals(res.getResult().toString(), projectService.getProjectDetailbyUsernameId("cpx", 1L).getResult().toString());

        //getProjectDetailByProjectId
        res = new ResJsonTemplate<>("200", projectRepository.findByProjectId(1L));
        Assert.assertEquals(res.getResult().toString(), projectService.getProjectDetailByProjectId(1L).getResult().toString());

        //confirmDevelop
        DevInfo devInfo = new DevInfo("cpx", 1L);
        res = new ResJsonTemplate<>("200", devInfo);
        //Assert.assertEquals(res.getResult().toString(), projectService.confirmDevelop(devInfo).getResult().toString());

        //getDeveloperCountbyProjectId
        res = new ResJsonTemplate<>("200", devInfoRepository.findByProjectId(1L).size());
        Assert.assertEquals(res.getResult().toString(), projectService.getDeveloperCountbyProjectId(1L).getResult().toString());

        //getDevProjectListbyDevelopUsername
        res = new ResJsonTemplate<>("200", projectRepository.searchDevelopingProjectbyUsername("cpx"));
        Assert.assertEquals(res.getResult().toString(), projectService.getDevProjectListbyDevelopUsername("cpx").getResult().toString());

        //getDevelopUsernameListByProjectId
        List<DevEnrollInfo> listD = devEnrollInfoRepository.findByProjectId(1L);
        List<String> listS = new LinkedList<String>();
        for (int i = 0; i < listD.size(); i++) {
            listS.add(listD.get(i).getUsername());
        }
        res = new ResJsonTemplate<>("200", listS);
        Assert.assertEquals(res.getResult().toString(), projectService.getDevelopUsernameListByProjectId(1L).getResult().toString());


        //getDevelopDetailByProjectId
        res = new ResJsonTemplate<>("200", projectRepository.searchDeveloperEnrollInfo(1L));
        Assert.assertEquals(res.getResult().toString(), projectService.getDevelopDetailByProjectId(1L).getResult().toString());



    }

}
