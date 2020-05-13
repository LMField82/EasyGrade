DROP DATABASE IF EXISTS easyGrade_DB;
CREATE DATABASE easyGrade_DB;

USE easyGrade_DB;

CREATE TABLE students(
    stu_id INT NOT NULL AUTO_INCREMENT,
    stu_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (stu_id)
);

CREATE TABLE teachers(
    tid INT NOT NULL AUTO_INCREMENT,
    tname VARCHAR(100) NOT NULL,
    PRIMARY KEY (tid)
);

CREATE TABLE subjects(
	sub_id INT NOT NULL AUTO_INCREMENT,
    sub_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (sub_id)
);

CREATE TABLE grades(
	studentID INT NOT NULL REFERENCES students(stu_id),
    teacherID INT NOT NULL REFERENCES teachers(tid),
    subjectID INT NOT NULL REFERENCES subjects(sub_id),
    grade VARCHAR(3),
    PRIMARY KEY (studentID, teacherID, subjectID)
);

CREATE TABLE assignments(
    aid INT NOT NULL AUTO_INCREMENT,
    aname VARCHAR(100) NOT NULL,
    stuID INT NOT NULL REFERENCES students(stu_id),
    PRIMARY KEY (aid)
);