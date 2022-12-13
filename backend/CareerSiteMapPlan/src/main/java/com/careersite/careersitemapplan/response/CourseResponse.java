package com.careersite.careersitemapplan.response;

import com.careersite.careersitemapplan.entity.Course;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseResponse {

    private long id;

    private String schoolName;

    private String schoolImgUrl;

    private String courseName;

    private String courseLink;

    private String region;

    public CourseResponse(Course course){
        id = course.getId();
        schoolName = course.getSchoolName();
        schoolImgUrl = course.getSchoolImgUrl();
        courseName = course.getCourseName();
        courseLink = course.getCourseLink();
        region = course.getRegion();
    }

}
