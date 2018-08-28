# Build Docker

cd mart-spring

gradle tasks

gradle bootRepackage

cd ..

mv mart-spring/build/libs/mart-spring-0.0.1-SNAPSHOT.jar mart-spring-0.0.1-SNAPSHOT.jar

docker build -t nee11235/crowdsourcing-mart-backend .

docker run -d -p 30001:30001 nee11235/crowdsourcing-mart-backend