-- create database jt_user;
-- create user 'teste'@'localhost' identified by 'teste';
-- grant all on jt_user.* to 'teste'@'localhost';

drop schema if exists jt_user;
CREATE SCHEMA jt_user DEFAULT CHARACTER SET utf8;

create table jt_user.user(
	id int auto_increment,
	email varchar(100) unique not null,
	nome varchar(100)  not null,
	senha varchar(20)  not null,
	telefone varchar(15),
    CONSTRAINT pk__usuario__id primary key (id)
);

create table jt_user.history(
	id int auto_increment,
	acao varchar(255),
    data timestamp not null default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk__history__id primary key (id)
);