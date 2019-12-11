#!/bin/bash

docker exec --interactive some-mysql \
         mysql --user root -ppassword < ~/Developer/INF1006-202-19A-01/3.DCL\&DDL/$1.sql
