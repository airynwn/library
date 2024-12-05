#!/bin/sh
psql -h localhost -d pro -U laura -f src/pro.sql

#TODO .env