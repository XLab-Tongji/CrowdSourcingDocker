/*
 Navicat Premium Data Transfer

 Source Server         : lab_database
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : 106.14.121.251:3306
 Source Schema         : crowdsourcing

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : 65001

 Date: 27/08/2018 19:54:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `account_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `dev_id` bigint(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `ext_params` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `info_id` bigint(20) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`account_id`),
  UNIQUE KEY `UK_q0uja26qgu1atulenwup9rxyr` (`email`),
  UNIQUE KEY `UK_gex1lmaqpg0ir5g1f5eftyaa1` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for account_login_log
-- ----------------------------
DROP TABLE IF EXISTS `account_login_log`;
CREATE TABLE `account_login_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_id` bigint(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `device` varchar(255) DEFAULT NULL,
  `expire_time` datetime DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `plat` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for attach
-- ----------------------------
DROP TABLE IF EXISTS `attach`;
CREATE TABLE `attach` (
  `attach_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `attach_name` varchar(255) DEFAULT NULL,
  `attach_type` varchar(255) DEFAULT NULL,
  `attach_url` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `is_del` bit(1) DEFAULT NULL,
  `meta_data` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`attach_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for dev_enroll_info
-- ----------------------------
DROP TABLE IF EXISTS `dev_enroll_info`;
CREATE TABLE `dev_enroll_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `enroll_date` datetime DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for developer
-- ----------------------------
DROP TABLE IF EXISTS `developer`;
CREATE TABLE `developer` (
  `dev_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `enroll_date` datetime DEFAULT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `dev_domain` varchar(255) DEFAULT NULL,
  `dev_intro` varchar(255) DEFAULT NULL,
  `ext_param` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`dev_id`),
  UNIQUE KEY `UK_7he3e2kpo85x20u5oefpkddt8` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for developing_info
-- ----------------------------
DROP TABLE IF EXISTS `developing_info`;
CREATE TABLE `developing_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `project_id` bigint(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `confirm_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`project_id`,`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for mart_git_connection
-- ----------------------------
DROP TABLE IF EXISTS `mart_git_connection`;
CREATE TABLE `mart_git_connection` (
  `mart_account_id` bigint(20) NOT NULL,
  `git_account_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`mart_account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `project_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `cost` double NOT NULL,
  `create_date` datetime DEFAULT NULL,
  `delivery_cycle` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `enroll_stop_time` datetime DEFAULT NULL,
  `file` tinyblob,
  `project_name` varchar(255) DEFAULT NULL,
  `project_state` int(11) NOT NULL,
  `project_type` varchar(255) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `warranty_cycle` int(11) NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for project_experience
-- ----------------------------
DROP TABLE IF EXISTS `project_experience`;
CREATE TABLE `project_experience` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_id` bigint(20) DEFAULT NULL,
  `certificate` longblob,
  `project_address` varchar(255) DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `project_region` varchar(255) DEFAULT NULL,
  `project_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for requirement
-- ----------------------------
DROP TABLE IF EXISTS `requirement`;
CREATE TABLE `requirement` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `creator_id` bigint(20) DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `file` longblob,
  `need_manager` int(11) NOT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `requirement_detail` varchar(255) DEFAULT NULL,
  `requirement_name` varchar(255) DEFAULT NULL,
  `requirement_state` int(11) NOT NULL,
  `requirement_type` varchar(255) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `role_id` bigint(20) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `age` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user_info_detail
-- ----------------------------
DROP TABLE IF EXISTS `user_info_detail`;
CREATE TABLE `user_info_detail` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gender` int(11) NOT NULL,
  `idcard` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `realname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
