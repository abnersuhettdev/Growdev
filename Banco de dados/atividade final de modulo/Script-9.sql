--CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--select * from pg_available_extensions;

--select * from pg_timezone_names;
--alter database personal_saver_bdd set TIMEZONE to 'America/Sao_Paulo';
--SHOW TIMEZONE;
--select current_timestamp; 


create table if not exists users(
	id uuid primary key not null default uuid_generate_v4(),
	"name" varchar (50) unique not null,
	email varchar(150) not null unique,
	"password" varchar (255) not null
);

create table if not exists notes(
	id uuid primary key not null default uuid_generate_v4(),
	title varchar (50) not null,
	description varchar (255) not null,
	author_id uuid not null,
	created_at timestamp not null default current_timestamp,
	archived bool not null default false,
	foreign key (author_id)
		references users (id)
);

insert into users ("name" , email,"password")
values 
	('@joão','joao@joao.com' ,'123456'),
	('@maria','maria@maria.com', '123456'),
	('@pedro','pedro@pedro.com', '123456'),
	('@lara', 'lara@lara.com','123456'),
	('@leticia', 'leticia@leticia.com','123456');

insert into notes (title, description, author_id)
values 
	('oi', 'oi', (select id from users u where u."name" = '@joão')),
	('oi', 'oi', (select id from users u where u."name" = '@joão')),
	('oi', 'oi', (select id from users u where u."name" = '@joão')),
	('oi', 'oi', (select id from users u where u."name" = '@joão')),
	('oi', 'oi', (select id from users u where u."name" = '@joão')),
	('oi', 'oi', (select id from users u where u."name" = '@maria')),
	('oi', 'oi', (select id from users u where u."name" = '@maria')),
	('oi', 'oi', (select id from users u where u."name" = '@maria')),
	('oi', 'oi', (select id from users u where u."name" = '@maria')),
	('oi', 'oi', (select id from users u where u."name" = '@maria')),
	('oi', 'oi', (select id from users u where u."name" = '@maria')),
	('oi', 'oi', (select id from users u where u."name" = '@pedro')),
	('oi', 'oi', (select id from users u where u."name" = '@pedro')),
	('oi', 'oi', (select id from users  u where u."name" = '@pedro')),
	('oi', 'oi', (select id from users u where u."name" = '@pedro')),
	('oi', 'oi', (select id from users u where u."name" = '@pedro')),
	('oi', 'oi', (select id from users u where u."name" = '@lara')),
	('oi', 'oi', (select id from users u where u."name" = '@lara')),
	('oi', 'oi', (select id from users u where u."name" = '@lara')),
	('oi', 'oi', (select id from users u where u."name" = '@lara')),
	('oi', 'oi', (select id from users u where u."name" = '@lara')),
	('oi', 'oi', (select id from users u where u."name" = '@leticia')),
	('oi', 'oi', (select id from users u where u."name" = '@leticia')),
	('oi', 'oi', (select id from users u where u."name" = '@leticia')),
	('oi', 'oi', (select id from users u where u."name" = '@leticia')),
	('tchau', 'tchau', (select id from users u where u."name" = '@leticia'));

update notes 
set archived = true
where id = (select id from notes n where n.title = 'tchau' and n.author_id = (select id from users u u where u."name" = '@leticia'));

delete from notes 
where id = '0de61c93-62d3-42ed-ada8-8fb0bfe50e0b';

select n.title, n.description, n.archived, u."name" from notes n join users u ON n.author_id = u.id where n.id = '7259d476-7e9b-474f-b279-61b46e5d4c99';
                                 
select n.title, n.description, n.archived, u."name" from notes n join users u ON n.author_id = u.id where u.id = 'ff9694ac-3626-4089-9f22-5481da093ff1'

select u.id from users u where u."name" = '@pedro' and u."password" = '123456'

select u."name" from users u ;

delete from notes;
delete from users;


drop table notes;
drop table users;

