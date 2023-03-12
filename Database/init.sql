-- since Oracle 12.1 and the introduction of Multitenant architecture
-- you need to set the pluggable database you wish to use.
alter session set container = XEPDB1

-- create user sql
create user django identified by oracle  
default tablespace users
temporary tablespace temp;
alter user django quota unlimited on users;

-- roles and privs
grant resource to django;
grant create session to django;