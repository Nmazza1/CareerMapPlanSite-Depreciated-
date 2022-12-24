# Career Map Plan
This project is based on the idea of input Credits for courses taken by a student, and dynamically displaying the available programs on a front end developed with ReactJS. The front end calls to an API hosted on a local machine using the H2 database which stores data on Schools in the Greater Montreal Region and subsequent courses for these schools.

## How to Run the Project
Download the current version of the repository and enter the directory of **careermapplan**. Once inside copy the direct path and open the command prompt.
Enter the Following:
>cd **direct path to careermapplan**
>npm install --force
>npm start

## Future To Do List

Below is a short list of ToDo's ranging from fixes to implementing new features (Credits, Courses, Schools, Regions, etc).
>Fix GET response when filtering by school Id's, Region and Prerequisites
>Fix Mapping of the Region Map on the front end. (Scale is slightly off)
>Consolidate code on the front end (Enhance readability and scalability)
>Add More Courses, Schools, Regions
>Add the ability to switch the focus from College Courses to University  Programs instead of High School to College.
>Add Subsequent University programs
>Optimize backend API calls as much as possible.
>Add additional diagrams to explain Prerequisites and the Binary operations

## Relationships

As of current, there are two tables used actively. 
There is the first table Schools and Courses

|Schools         |Courses                       
|----------------|-------------------------------
|Id|Id          
|School Name |Course Name            
|School Image URL   |Course Link
|Region     | School Id (FK)
|   |Prerequisite     |

Schools can have many courses yet only one course may belong to one school at any time.
## What is a Prerequisite?

Do to the nature of this project, those who have course credits for additional courses should be able courses that require them **and** courses they are "over-qualified" for.
Prerequisites are handle as binary values, using a sorting OR algorithm to match if a student has the credits required, or credits that are not necessary or not the correct ones.
Below is a table to visualize the meaning.
|Name | Bit Value |                
|----------------|-
|High Math| 8  |  
|High Science| 4  |  
|Chemistry| 2  | 
|Physics| 1  |     

A student's Credit "Score" must be equal or greater than the bit represented in the course
For example,
1100 (High Math and Science) and
1010 (High Math Chemistry) are not equal as the third digit, does not pass the OR check.

# End Points

### GET
>/api/schools
>Optional parameter to sort by region.
>/api/schoolsq?region=
>
>/api/schools/{school id}/courses
>Retrieves courses from a selected school

>/api/courses
>Retrieves all courses regardless of school.
>
>Optional Parameters  to sort by region,  and prerequisites
>/api/courses?prereq=&region=

### POST
>/api/schools
>Requires request body, name of school, school image banner, and region
>
>/api/schools/{schoold id}/courses
>Add a course to a specific school.
>
>/api/courses
>Adds a course to the course table
>Requires a nested JSON body of a school request.

### PUT
>/api/schools/{id}
>Updates the information of a specific school. All fields must be filled.
>
>/api/courses/{id}
>Updates the information of a specific course. All fields must be filled.

### DELETE
>/api/schools/{id}
>Deletes a school and all courses linked to it.
>
>/api/courses/{id}
>Deletes only the course and leaves the school object as is.


