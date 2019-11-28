FROM sequenceiq/spark:1.6.0

RUN curl -s http://central.maven.org/maven2/mysql/mysql-connector-java/5.1.38/mysql-connector-java-5.1.38.jar -o /usr/local/spark/lib/mysql-connector-java-5.1.38.jar

COPY scripts /data/scripts
