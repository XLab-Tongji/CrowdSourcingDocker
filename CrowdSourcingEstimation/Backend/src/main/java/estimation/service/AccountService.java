package estimation.service;

import estimation.DAO.AccountDao;
import estimation.bean.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    @Autowired
    private AccountDao accountDao;

    public boolean login (String username, String password) {
        Account account = accountDao.getUserByUsername(username);
        return account.getPassword().equals(password);
    }

    public boolean register(Account account) {
        return accountDao.insertUser(account);
    }
}
