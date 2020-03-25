FROM openjdk:11.0.1-jdk-sid
VOLUME /tmp
EXPOSE 2006
ARG JAR_FILE
ADD ${JAR_FILE} app.jar
ENTRYPOINT exec java -Djava.security.egd=file:/dev/./urandom -jar /app.jar
