DROP DATABASE IF EXISTS gradebookDB;

CREATE DATABASE gradebookDB;

USE gradebookDB;

CREATE TABLE Students(
student_id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
final_grade VARCHAR(3),
PRIMARY KEY(student_id)
);

CREATE TABLE Assignments(
assignment_id INT NOT NULL AUTO_INCREMENT,
standard VARCHAR (225) NOT NULL,
PRIMARY KEY (assignment_id)
);

CREATE TABLE Grades(
student_id INT,
assignment_id INT,
grade INT,
FOREIGN KEY(assignment_id) REFERENCES Assignments (assignment_id),
FOREIGN KEY(student_id) REFERENCES Students (student_id)
);

INSERT INTO Students (student_id, first_name, last_name)
VALUES ("1", "Yolanda", "Hernandez"), ("2", "Zoe", "Simmons"), ("3", "Thomas", "Simpson"), ("4", "Keeley", "Aaron"), ("5", "Bradley", "Cooper"),
("6", "Wendy", "Westcott"), ("7", "Kenny", "Robins");
 
INSERT INTO Assignments (assignment_id, standard)
VALUES ("1", "adding whole numbers"), ("2", "subtracting whole numbers"), ("3", "solving one-step equations");

INSERT INTO Grades (student_id, assignment_id, grade)
VALUES ("1", "1", "4"), ("2", "1", "4"), ("3", "1", "3"), ("4", "1", "3"), ("5", "1", "1"), ("6", "1", "2"), ("7", "1", "4"); 

SELECT * FROM Students;
SELECT * FROM Assignments;
SELECT * FROM Grades;

SELECT Students.student_id, Students.first_name, Students.last_name, Assignments.assignment_id, Grades.grade FROM Students JOIN Grades ON Students.student_id = Grades.student_id  JOIN Assignments ON Grades.assignment_id = Assignments.assignment_id;