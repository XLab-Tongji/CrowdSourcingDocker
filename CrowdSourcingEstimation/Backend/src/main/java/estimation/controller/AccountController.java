package estimation.controller;

import estimation.bean.Account;
import estimation.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value="/account")
public class AccountController {
    @Autowired
    AccountService accountService;

    @RequestMapping("/login")
    @ResponseBody
    public Object login(@RequestBody Account account) {
        Map<String, String> ret = new HashMap<>();
        if (accountService.login(account.getUsername(), account.getPassword())) {
            ret.put("tokenid", account.getUsername() + System.currentTimeMillis());
        }
        return ret;
    }

    @RequestMapping("/register")
    @ResponseBody
    public Object register(@RequestBody Account account) {
        if (accountService.register(account)) {
            return HttpStatus.ACCEPTED;
        } else {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }
}
