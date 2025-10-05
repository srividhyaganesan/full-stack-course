create table student_entry(
 roll_no INT primary key,
 age INT NOT null default "14",
 name varchar(50),
 class varchar(5) default "7",
 percentage float,
 dob date
);

INSERT INTO student_entry(roll_no,age,name,class,percentage,dob)
VALUES
(101,16,"srividhya","9",87.5,'2002-05-24'),
(102,17,"srividhya","10",88.5,'2001-05-24'),
(103,18,"srividhya","11",89.5,'2000-05-24'),
(104,19,"srividhya","12",90.5,'1999-05-24'),
(105,20,"srividhya","clg",91.5,'1998-05-24');

INSERT INTO student_entry(roll_no,name,percentage,dob)
VALUES
(106,"srividhya",87.5,'2002-06-24'),
(107,"srividhya","88.5",'2001-07-24'),
(108,"srividhya",89.5,'2000-08-24'),
(109,"srividhya",90.5,'1999-09-24'),
(110,"srividhya",91.5,'1998-10-24');

# update table
UPDATE student_entry SET name = 'Ganesh' WHERE roll_no = 102;
UPDATE student_entry SET name = 'Ganesha' WHERE roll_no = 103;
UPDATE student_entry SET name = 'Gayatri' WHERE roll_no = 104;
UPDATE student_entry SET name = 'srini' WHERE roll_no = 105;
UPDATE student_entry SET name = 'sudhan' WHERE roll_no = 106;
UPDATE student_entry SET name = 'kittu' WHERE roll_no = 107;
UPDATE student_entry SET name = 'lakshmi' WHERE roll_no = 108;
UPDATE student_entry SET name = 'sriram' WHERE roll_no = 109;
UPDATE student_entry SET name = 'priya' WHERE roll_no = 110;

# delete table
delete from student_entry where roll_no=103;


# add column
ALTER table student_entry
ADD column city varchar(10) default 'chennai';

# drop column
ALTER table student_entry
DROP column city;

# rename table
ALTER table student_entry
rename to student_info;
ALTER table student_info
rename to student_entry;

# modify column
ALTER table student_entry
MODIFY age INT default 15;

INSERT INTO student_entry(roll_no,name,percentage,dob)
VALUES
(111,"aparna",92.5,'2002-06-24');


select * from student_entry;
# operators in sql
SELECT * FROM student_entry WHERE age+1=18;
SELECT * FROM student_entry where age>=18;
SELECT * FROM student_entry where age>=18 and roll_no>=105;
SELECT * FROM student_entry where age<18 or name !="srividhya";
select name,age from student_entry where age between 18 AND 20;
SELECT name,age from student_entry where age NOT in (14);
select name,age from student_entry limit 5;

# order by
SELECT name,age from student_entry order by age DESC;

# aggregate functions
select max(age) from student_entry;
select max(roll_no) from student_entry;
select avg(percentage) from student_entry;
select min(percentage) from student_entry;

# group by
select age,count(roll_no) from student_entry group by age;
# having
select age,count(roll_no) from student_entry group by age having age>=18;

# truncate table
TRUNCATE table student_entry;



