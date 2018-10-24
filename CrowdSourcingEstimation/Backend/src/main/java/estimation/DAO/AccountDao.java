package estimation.DAO;

import estimation.bean.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class AccountDao {
    @Autowired
    private MongoTemplate mongoTemplate;

    public Account getUserByUsername(String username) {
        return mongoTemplate.findOne(new Query(Criteria.where("username").is(username)), Account.class, "Account");
    }

    public boolean insertUser(Account account) {
        try {
            mongoTemplate.insert(account, "Account");
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
