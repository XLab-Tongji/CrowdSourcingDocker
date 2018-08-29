# Software Estimation Tool

## Introduction

The software cost estimating platform will serve as the estimating sub module of Tongji Open source community crowdsourcing platform, and provide the online software project cost estimating service for the vast number of developers, which fills the blank of the domestic online software cost estimating platform.

When the project Publisher publishes the project, it can enter the software cost estimating platform, through the parameter input, carries on the software cost estimation to this project, in order to conveniently and accurately determine the project price, the workload and so on. 

The platform is designed to help project publishers to accurately estimate the cost of software projects, workload estimates, to prevent the project due to the lack of software cost estimates, resulting in uncontrolled software projects.

## How to Use It

### For backend

#### Environment Requirements

- **Java Runtime** : JDK 1.8
- **Database**: MongoDB 3.4
- **Package Management Tools**: Maven
- **Configuration Management tools**: git

#### Get the project

- get the code from github
  > git clone https://github.com/Sixaps/SoftwareEstimation-backend

#### Install dependency

- open the terminal and enter the project folder
- run the command

```
mvn install
```

#### Change the address of the database to your own database address

- open the file: src->main->resources->application.properties
- change the  address of the database to your own database address

#### Run the program

- run the class : src->main->java->estimation->Application.java

#### Some Regulations

- the MongoDB should have enough storage to save the data
- Do not modify database data directly according to data format
- Do not occupy 8011 ports when you want to run the front end


# Build Docker

cd mart-spring

mvn package

mv target/crowdsourcing-estimation-backend-1.0-SNAPSHOT.jar crowdsourcing-estimation-backend-1.0-SNAPSHOT.jar

docker build -t nee11235/crowdsourcing-estimation-backend .

docker run -d -p 8011 :8011 nee11235/crowdsourcing-estimation-backend