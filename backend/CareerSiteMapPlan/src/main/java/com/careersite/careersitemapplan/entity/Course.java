package com.careersite.careersitemapplan.entity;

import com.careersite.careersitemapplan.request.CourseRequest;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "courses")
public class Course {

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Column(name = "school_name")
    private String schoolName;

    @Column(name = "school_img_url")
    private String schoolImgUrl;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "course_link")
    private String courseLink;

    @Column(name = "region")
    private String region;

public Course(CourseRequest courseRequest)
{
    schoolName = courseRequest.getSchoolName();
    schoolImgUrl = courseRequest.getSchoolImgUrl();

    courseName = courseRequest.getCourseName();
    courseLink = courseRequest.getCourseLink();

    region = courseRequest.getRegion();
}






}
