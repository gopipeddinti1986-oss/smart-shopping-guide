-- Smart Shopping Guide - PostgreSQL Database Initialization Script
-- Executed on initial container launch by docker-entrypoint-initdb.d

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Ensure timezone is UTC
SET timezone TO 'UTC';
