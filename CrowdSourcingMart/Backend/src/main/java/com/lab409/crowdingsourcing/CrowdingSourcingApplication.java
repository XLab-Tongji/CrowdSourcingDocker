package com.lab409.crowdingsourcing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

/**
 * application启动类
 * @author yinghogncan
 */
@SpringBootApplication
public class CrowdingSourcingApplication {


	public static void main(String[] args) {
//		try {
//			Class.forName("com.mysql.jdbc.Driver");
//			Connection conn = (Connection) DriverManager
//					.getConnection("jdbc:mysql://106.14.121.251:3306/crowdsourcing?user=root&password=My19970427" +
//							"&useUnicode=true&characterEncoding=UTF8");
//			Statement s =  conn.createStatement();
//			System.out.println(conn.isClosed());
//		}
//		catch (Exception e) {
//			e.printStackTrace();
//		}
		SpringApplication.run(CrowdingSourcingApplication.class, args);
	}
}
