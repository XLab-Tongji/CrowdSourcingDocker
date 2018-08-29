FROM frolvlad/alpine-oraclejdk8:slim

MAINTAINER nee <nee_11235@qq.com>

VOLUME /tmp

ADD mart-spring-0.0.1-SNAPSHOT.jar app.jar

RUN sh -c 'touch /app.jar'

ENV JAVA_OPTS=""

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]