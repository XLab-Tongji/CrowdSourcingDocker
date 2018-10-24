package estimation.controller;


import estimation.bean.Account;
import estimation.bean.Requirement;
import estimation.service.ManagerService;
import estimation.service.RequirementService;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by xuawai on 03/05/2017.
 */
@RestController
@RequestMapping(value="/estimation")
public class RequirementController {
    @Autowired
    private RequirementService requirementService;

    @Autowired
    private ManagerService managerService;

    //增加一个新需求
    @RequestMapping(value = "/addRequirement",method = RequestMethod.POST)
    @ResponseBody
    public Object addRequirement(@RequestBody Map<String, String> map) {
        String userId = map.get("username");
        if(userId == null){
            HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
            return new ResponseEntity<String>("",status);
        }
        return requirementService.add(userId);
    }

    //返回一条记录
    @RequestMapping(value = "/getRequirement/{id}")
    @ResponseBody
    public Requirement getRequirement(@RequestBody(required = false) Account account, @PathVariable String id) {
        return requirementService.getRequirement(id);
    }

    //返回所有记录
    @RequestMapping(value = "/getAllRequirementsByUser",method = RequestMethod.POST)
    @ResponseBody
    public Object getAllRequirementsByUser(@RequestBody Account account) {
        String username = account.getUsername();
        if(username == null){
            HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
            return new ResponseEntity<Object>("",status);
        }
        return requirementService.getAllRequirementsByUser(username);
    }

    //返回所有记录
    @RequestMapping(value = "/getAllRequirements",method = RequestMethod.POST)
    public Object getAllRequirements(@RequestBody Account account) {
        String userId = account.getUsername();
        if(!managerService.judgeIdentity(userId)) {
            HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
            return new ResponseEntity<Object>("",status);
        }
        return requirementService.getAllRequirements();
    }

    @RequestMapping(value = "/deleteRequirement/{id}", method = RequestMethod.POST)
    public void deleteRequirement(@RequestBody Account account, @PathVariable String id) {
        String userId = account.getUsername();
        if(!requirementService.checkIdentity(id, userId))
            return;
        this.requirementService.deleteRequirement(id);
    }

    @RequestMapping(value = "/changeState/{id}", method = RequestMethod.POST)
    public Object changeState(HttpServletRequest request, @RequestBody JSONObject jsonObject,@PathVariable String id) {
        HttpStatus status = HttpStatus.ACCEPTED;
        String state = jsonObject.getString("state");
        String[] trueState = {"待审核","待修改","完成","估算中"};
        Boolean flag = false;
        for (String str: trueState) {
            if(str.equals(state)){
                flag = true;
                break;
            }
        }
        if(!flag) {
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            return new ResponseEntity<Object>("", status);
        }
    	String remark = jsonObject.getString("remark");
    	if(!this.requirementService.changeState(id, state, remark)){
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Object>("",status);
    }
}
