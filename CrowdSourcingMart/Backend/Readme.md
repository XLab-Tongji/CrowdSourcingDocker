# Build Docker

cd mart-spring

gradle tasks

gradle bootRepackage

cd ..

mv mart-spring/build/libs/mart-spring-0.0.1-SNAPSHOT.jar mart-spring-0.0.1-SNAPSHOT.jar

docker build -t txhsl/crowdsourcing-spring-docker .

docker run -d -p 30001:30001 txhsl/crowdsourcing-spring-docker	