package com.lab409.crowdingsourcing;


import com.lab409.crowdingsourcing.dto.SimpleProjectDto;
import com.lab409.crowdingsourcing.entity.DevEnrollInfo;
import com.lab409.crowdingsourcing.entity.DevInfo;
import com.lab409.crowdingsourcing.entity.Project;
import com.lab409.crowdingsourcing.repository.DevEnrollInfoRepository;
import com.lab409.crowdingsourcing.repository.DevInfoRepository;
import com.lab409.crowdingsourcing.repository.ProjectRepository;
import com.lab409.crowdingsourcing.service.ProjectService;
import com.lab409.crowdingsourcing.service.impl.ProjectServiceImpl;
import com.lab409.crowdingsourcing.util.ResJsonTemplate;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.LinkedList;
import java.util.List;

import static org.mockito.Mockito.when;


public class ProjectMock {

    @Mock
    private ProjectRepository projectRepository;

    @InjectMocks
    @Resource
    private ProjectServiceImpl projectService;

    @Before
    public void setUp() throws Exception {
        // Initialize mocks created above
        MockitoAnnotations.initMocks(this);
        // Change behaviour of `resource`
        when(projectRepository.findAll()).thenThrow(new RuntimeException());
    }
    @Test
    //@Rollback(true)
    public void projectServiceTestSuccess(){

        //getAllProject
        //Assert.assertEquals(projectRepository.findAll().toString(), projectService.getAllproject().getResult().toString());
        Assert.assertEquals("500", projectService.getAllproject().getStatus());



    }

}
