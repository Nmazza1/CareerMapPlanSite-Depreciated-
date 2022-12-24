package com.careersite.careersitemapplan.response;

import com.careersite.careersitemapplan.entity.Course;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseResponse {

    private long id;

    private String courseName;

    private String courseLink;

    private Integer prerequisite;

    private SchoolResponse school;

    public CourseResponse(Course course){
        id = course.getId();
        courseName = course.getCourseName();
        courseLink = course.getCourseLink();
        school = new SchoolResponse(course.getSchool());
        prerequisite = course.getPrerequisite();

    }

}
