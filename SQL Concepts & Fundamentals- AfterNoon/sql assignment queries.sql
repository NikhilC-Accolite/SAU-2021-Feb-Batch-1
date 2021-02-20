create database Student;
use Student;

Create table StudentBasicInformation(
	StudentName varchar(255) NOT NULL,
    StudentSurName varchar(255),
    StudentRollNo int primary key,
    StudentAddress varchar(255) NOT NULL,
    StudentContactNo character(10) NOT NULL,
    StudentEmail varchar(50),
    StudentClass varchar(6));
    
describe StudentBasicInformation;

Create table StudentAdmissionPaymentDetails(
	StudentPaymentId varchar(20) primary key,
    StudentRollNo int NOT NULL,
    AmountPaid int NOT NULL,
    AmmountBalanace int NOT NULL,
    PreviousPaymentId varchar(20) NOT NULL,
    PaymentType varchar(10) not null,
    AdmissionType varchar(20) not null,
    FOREIGN KEY (StudentRollNo) REFERENCES StudentBasicInformation(StudentRollNo)
    );
    
describe StudentAdmissionPaymentDetails;

Create table StudentSubjectInformation(
	SubjectOpted varchar(20) not null,
    StudentRollNo int not null,
    StudentTotalMarks int not null,
    StudentObtainedMarks int not null,
    StudentMarksPercentage float(5),
    SubjectCategory varchar(20) not null,
    primary key (SubjectOpted,StudentRollNo),
    Foreign key (StudentRollNo) references StudentBasicInformation(StudentRollNo)
);

describe StudentSubjectInformation;

Create table SubjectScholarshipInformation(
	StudentRollNo int not null,
    ScholarshipName varchar(255) not null,
    ScholarshipDescription varchar(255) not null,
    ScholarshipAmount float(10),
    ScholarshipCategory varchar(255),
    ScholarshipStatus varchar(10) not null,
    ScholarshipVerficationLevel varchar(255) not null,
    primary key (StudentRollNo, ScholarshipName),
    Foreign key (StudentRollNo) references StudentBasicInformation(StudentRollNo)
);

describe SubjectScholarshipInformation;

Insert into StudentBasicInformation 
(StudentName, StudentSurName,StudentRollNo, StudentAddress, StudentContactNo, StudentEmail, StudentClass) 
values 
('Nikhil','C',45678,'#748/8 18th main SriNagar Bangalore','8088631797','nik@gmail.com','XII-C'),
('Bharath','Kumar',12589,'#18 11th main GiriNagar Bangalore','7896654197','bhar@gmail.com','XII-A'),
('Arun','Patel',74123,'#12 7th main HanumanthNagar Delhi','7412331797','arun@gmail.com','X-B'),
('Mahesh','Kumar',78963,'#11/2 7th main HanumanthNagar Delhi','7414531797','mahesh@gmail.com','VI-C'),
('AChjit','Patel',75321,'#85/2 8th main HanumanthNagar Nagpur','5214531797','abhi@gmail.com','x-B'),
('Suresh','Kumar',75369,'#112/6 8th main RTNagar Nagpur','9614531797','suresh@gmail.com','XII-B'),
('Ram','Patel',95147,'#78 9th main RTNagar Nagpur','9687453177','ram@gmail.com','VII-B'),
('Sham','Kumar',95159,'#11 9th main RTNagar Indore','9784531797','sham@gmail.com','IX-A'),
('Naveen','Yadav',78988,'#741/1 9th main JPNagar Indore','9784531797','naveen@gmail.com','IX-B'),
('Abhishek','Kumar',78787,'#120/8 11th main JPNagar Indore','8532131797','abhishek@gmail.com','XII-A'),
('Suma','Yadav',12121,'#5 11th main JPNagar chennai','8532131797','suma@gmail.com','V-A'),
('Roopa','Yadav',12547,'#101 11th main JPNagar chennai','8534531797','roopa@gmail.com','XI-C'),
('pavithra','sharma',47854,'#789 7th main RTNagar Delhi','9545431797','pavi@gmail.com','X-C');

insert into StudentAdmissionPaymentDetails
(StudentPaymentId, StudentRollNo, AmountPaid, AmmountBalanace, PreviousPaymentId, PaymentType, AdmissionType)
values
('pay56168' , 12121 , 16000 , 21000 ,'pay61957','cash','CET' ),
('pay30168', 12547 , 9000 , 14000 ,'pay16947' ,'cash','CET'),
('pay29653' , 12589 , 22000 , 21000 ,'pay94669' ,'Cheque','management'),
('pay80209' , 45678 , 30000 , 3000 ,'pay96823' ,'Online','management'),
('pay78220' , 47854 , 11000 , 17000 ,'pay38864' ,'Online','Comed-K'),
('pay80187' , 74123 , 17000 , 7000 ,'pay54707' ,'Cheque','management'),
('pay11067' , 75321 , 30000 , 18000 ,'pay98983' ,'Cheque','management'),
('pay61087' , 75369 , 10000 , 27000 ,'pay58627' ,'Online','JEE'),
('pay64451' , 78787 , 17000 , 21000 ,'pay46628' ,'Online','JEE'),
('pay35720' , 78963 , 22000 , 2000 ,'pay78477' ,'cash','JEE'),
('pay11771' , 78988 , 20000 , 29000 ,'pay30843' ,'cash','JEE'),
('pay85659' , 95147 , 21000 , 4000 ,'pay14804' ,'cash','CET'),
('pay71612' , 95159 , 20000 , 22000 ,'pay12208' ,'cash','CET');

insert into StudentSubjectInformation
(SubjectOpted, StudentRollNo, StudentTotalMarks, StudentObtainedMarks, StudentMarksPercentage,SubjectCategory)
values
( 'JavaScript' ,12121, 90 , 81 ,NULL, 'develop' ),
( 'React' ,12547, 100 , 89 ,NULL, 'develop' ),
( 'React',12589, 90 , 81 ,NULL, 'logic' ),
( 'RDBMS' ,45678, 50 , 37 ,NULL, 'develop' ),
( 'JavaScript' ,47854, 100 , 99 ,NULL, 'coding' ),
( 'Git' ,74123, 50 , 48 ,NULL, 'design' ),
( 'Java' ,75321, 80 , 78 ,NULL, 'develop' ),
( 'RDBMS' ,75369, 75 , 70 ,NULL, 'develop' ),
( 'Angular' ,78787, 125 , 95 ,NULL, 'develop' ),
( 'Git' ,78963, 50 , 22 ,NULL, 'develop' ),
( 'Java' ,78988, 90 , 81 ,NULL, 'logic' ),
( 'RDBMS' ,95147, 100 , 97 ,NULL, 'design' ),
( 'Git' ,95159, 90 , 86 ,NULL, 'design' ),
( 'Angular' ,45678, 100 , 100 ,NULL, 'develop'),
( 'Angular' ,47854, 90 , 86 ,NULL, 'design' ),
('Angular',12121, 80 , 79 ,NULL, 'logic'),
('Git',12547, 80 , 74 ,NULL, 'develop'),
('NoSQL',12589, 75 , 73 ,NULL, 'develop'),
('RDBMS',78787, 75 , 69 ,NULL, 'design'),
('Git',12121, 75 , 65 ,NULL, 'coding'),
('NoSQL',95159, 50 , 26 ,NULL, 'coding'),
('NoSQL',47854, 90 , 83 ,NULL, 'coding'),
('Java',74123, 100 , 83 ,NULL, 'coding'),
('JavaScript',95147, 90 , 83 ,NULL, 'develop'),
('Angular',12547, 80 , 71 ,NULL, 'logic');

insert into SubjectScholarshipInformation
(StudentRollNo, ScholarshipName, ScholarshipDescription, ScholarshipAmount, ScholarshipCategory, ScholarshipStatus , ScholarshipVerficationLevel)
values
(12121,'SwarnaJayanti Fellowship','special assistance and support to a selected number of young scientists',2500,NULL,'Pending','District'),
(12547,'Karnata EPASS','Scholarship for Backward Class students',6000,NULL,'Rejected','District'),
(12589,'Karnata EPASS','Scholarship for Backward Class students',4000,NULL,'Processing','College'),
(45678,'Karnata EPASS','Scholarship for Backward Class students',7000,NULL,'Granted','District'),
(47854,'National Fellowship','Scholarship for Higher Education of ST Students',7500,NULL,'Granted','Taluk'),
(74123,'AICTE-Saksham','Ministry of Human Resource Development – AICTE',5000,NULL,'Rejected','Ministry'),
(75321,'Karnata EPASS','Scholarship for Backward Class students',4000,NULL,'Granted','College'),
(75369,'Karnata EPASS','Scholarship for Backward Class students',4000,NULL,'Processing','Taluk'),
(78787,'AICTE-Saksham','Ministry of Human Resource Development – AICTE',5000,NULL,'Processing','Ministry'),
(78963,'ISHAN UDAY','Special Scholarship Scheme for North Eastern Region',9000,NULL,'Granted','Taluk'),
(78988,'Karnata EPASS','Scholarship for Backward Class students',4000,NULL,'Granted','Taluk');

select * from StudentBasicInformation;
select * from StudentAdmissionPaymentDetails;
select * from StudentSubjectInformation;
select * from SubjectScholarshipInformation;

update StudentBasicInformation set StudentContactNo='8088789821' where StudentRollNo=12589;
update StudentBasicInformation set StudentEmail='Abhishek.Kumar@gmail.com' where StudentRollNo=78787;
update StudentAdmissionPaymentDetails set PaymentType='UPI' where StudentPaymentId='pay64451';
update studentSubjectInformation set SubjectCategory='testing' where StudentRollNo=12547 and SubjectOpted='Angular';
update SubjectScholarshipInformation set ScholarshipVerficationLevel = 'District' where StudentRollNo=78988;

SELECT BasicInfo.StudentRollNo, BasicInfo.StudentName, BasicInfo.StudentEmail, BasicInfo.StudentClass,
SchoInfo.StudentRollNo, SchoInfo.ScholarshipName,SchoInfo.ScholarshipAmount
from StudentBasicInformation as BasicInfo
join SubjectScholarshipInformation as SchoInfo on
BasicInfo.StudentRollNo = SchoInfo.StudentRollNo
where ScholarshipAmount > 5000 and ScholarshipStatus='Granted';
    


SELECT StudentRollNo, StudentName, StudentEmail, StudentClass
from StudentBasicInformation 
where StudentRollNo not in (
	Select StudentRollNo
    from SubjectScholarshipInformation
    where 
    ScholarshipStatus = 'Granted');

DELIMITER //
CREATE PROCEDURE UpdatePercentage()
BEGIN
    UPDATE StudentSubjectInformation 
    set 
    StudentSubjectInformation.StudentMarksPercentage = 
    ( StudentSubjectInformation.StudentObtainedMarks / StudentSubjectInformation.StudentTotalMarks ) * 100;
END //

CALL UpdatePercentage(); //
select * from StudentSubjectInformation;

DELIMITER //
CREATE PROCEDURE UpdateCategory() 
BEGIN
    UPDATE SubjectScholarshipInformation as SchoInfo
    JOIN StudentSubjectInformation as SubInfo 
    on 
    SubInfo.StudentRollNo = SchoInfo.StudentRollNo 
    set  SchoInfo.ScholarshipCategory =
        CASE WHEN SubInfo.StudentMarksPercentage > 90 THEN "Special facility"
             WHEN SubInfo.StudentMarksPercentage <= 90 AND SubInfo.StudentMarksPercentage >80 THEN "Fee+hostel fee Concession"
             WHEN SubInfo.StudentMarksPercentage <= 80 AND SubInfo.StudentMarksPercentage >70 THEN "Fee concession"
             ELSE "Hostel concession"
         END;
END //

CALL UpdateCategory(); //
select * from SubjectScholarshipInformation; //

Create view BalanceAmountToBePaid as
SELECT BasicInfo.StudentRollNo, BasicInfo.StudentName, BasicInfo.StudentEmail, BasicInfo.StudentClass, Admission.AmmountBalanace
    from 
    StudentBasicInformation as BasicInfo
    join StudentAdmissionPaymentDetails as Admission 
    on BasicInfo.StudentRollNo = Admission.StudentRollNo; //
    
select * from BalanceAmountToBePaid; //

Select StudentRollNo, StudentName, StudentEmail, StudentClass 
from StudentBasicInformation
where StudentBasicInformation.StudentRollNo not in (
	Select StudentRollNo
    from SubjectScholarshipInformation);

DELIMITER $$
CREATE PROCEDURE AmountToBePaid_ByParameter(IN StudentRollNumber INT) 
BEGIN
	SELECT Admisssion.AmmountBalanace 
    from StudentAdmissionPaymentDetails as Admisssion 
    WHERE Admisssion.StudentRollNo = StudentRollNumber;
END $$

CALL AmountToBePaid_ByParameter(95147); $$

Select Top5Students.StudentRollNo, Top5Students.StudentName, Top5Students.StudentEmail, Top5Students.StudentClass, Top5Students.percentage
from (	
		Select BasicInfo.StudentRollNo, BasicInfo.StudentName, BasicInfo.StudentEmail, 
			   BasicInfo.StudentClass, SubInfo.StudentMarksPercentage as percentage
		from StudentBasicInformation as BasicInfo
		join StudentSubjectInformation as SubInfo 
		on 
		BasicInfo.StudentRollNo = SubInfo.StudentRollNo
        order by SubInfo.StudentMarksPercentage desc) 
	as Top5Students 
    limit 0,5; $$ 
    
select FrequencyTable.Category_name, max(FrequencyTable.Count) as Category_count from (
Select SchoInfo.ScholarshipCategory as Category_Name, Count(SchoInfo.ScholarshipCategory) as Count
from SubjectScholarshipInformation as SchoInfo
group by SchoInfo.ScholarshipCategory) as FrequencyTable; $$

Select SchoInfo.ScholarshipCategory as Category_Name, Count(SchoInfo.ScholarshipCategory) as Count
from SubjectScholarshipInformation as SchoInfo
group by SchoInfo.ScholarshipCategory;
 
update SubjectScholarshipInformation set ScholarshipAmount = 2000 where StudentRollNo=78963; $$
update SubjectScholarshipInformation set ScholarshipAmount = 7500 where StudentRollNo=45678; $$

Select BasicInfo.StudentRollNo, BasicInfo.StudentName, SubInfo.StudentMarksPercentage
from StudentBasicInformation as BasicInfo
JOIN StudentSubjectInformation as SubInfo 
on 
BasicInfo.StudentRollNo = SubInfo.StudentRollNo
where BasicInfo.StudentRollNo in
(Select ssss.StudentRollNo
    from StudentSubjectInformation as ssss
    where ssss.StudentRollNo in 
        ( Select SchoInfo.StudentRollNo
            from SubjectScholarshipInformation as SchoInfo
            where SchoInfo.ScholarshipAmount in 
                ( Select max(SubjectScholarshipInformation.ScholarshipAmount) from SubjectScholarshipInformation )
                and 
                SchoInfo.ScholarshipStatus = 'Granted'
        )
) order by SubInfo.StudentMarksPercentage desc; $$

/*Compare percentage of ecah student with classmate by each subject*/
SELECT table_1.StudentRollNo,table_1.SubjectOpted,table_1.StudentMarksPercentage,
		table_2.StudentRollNo,table_2.SubjectOpted,table_2.StudentMarksPercentage
 FROM StudentSubjectInformation as table_1
CROSS JOIN StudentSubjectInformation as table_2  
WHERE NOT table_1.StudentRollNo = table_2.StudentRollNo  
ORDER BY table_1.StudentRollNo ASC; $$

/*finding scholarship status of student whose scholarship is not Granted*/
SELECT BasicInfo.StudentRollNo, BasicInfo.StudentName, SchoInfo.ScholarshipName,SchoInfo.ScholarshipAmount, SchoInfo.ScholarshipStatus
from StudentBasicInformation as BasicInfo
join SubjectScholarshipInformation as SchoInfo on
BasicInfo.StudentRollNo = SchoInfo.StudentRollNo
where ScholarshipStatus <>'Granted'; $$

/* find students who paid fees but did not apply for scholarship*/
SELECT Admission.StudentRollNo, Admission.StudentpaymentId
FROM StudentAdmissionPaymentDetails as Admission
LEFT OUTER JOIN SubjectScholarshipInformation as SchoInfo
ON Admission.StudentRollNo = SchoInfo.StudentRollNo 
WHERE SchoInfo.StudentRollNo is NULL;








