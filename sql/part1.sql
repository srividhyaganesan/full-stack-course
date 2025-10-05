CREATE database student;
SHOW DATABASES;
USE student;
CREATE table student(
roll_no INT ,
student_name varchar(50),
int_sub varchar(50) DEFAULT 'computer' 
);
SHOW tables;
DESC student;
ALTER TABLE student
ADD constraint roll_check UNIQUE (roll_no),
ADD constraint student_check check (student_name IS NOT NULL),
ADD constraint sub_check check(CHAR_LENGTH(int_sub)>1);

ALTER table student
MODIFY roll_no INT primary key ;

insert into student(roll_no, student_name, int_sub)
values
(1,"sri","science"),
(2,"gan","maths"),
(3,"gay","english");

insert into student (roll_no,student_name)
values
(4,"srini");

CREATE table posts(
	post_id INT primary key,
    content varchar(200),
    user_id INT,
    foreign key (user_id) references student(roll_no)
);

insert into posts(post_id,content,user_id)
values
(101,"hello world",1),
(102,"bye bye",2);
insert into posts(post_id,content,user_id)
values
(103,"good morning",3),
(104,"good night",4);


select * from student;
select * from posts WHERE post_id>=103;