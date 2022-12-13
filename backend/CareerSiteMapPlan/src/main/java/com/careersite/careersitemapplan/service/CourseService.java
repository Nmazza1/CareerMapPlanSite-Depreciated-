package com.careersite.careersitemapplan.service;

import com.careersite.careersitemapplan.entity.Course;
import com.careersite.careersitemapplan.exception.ResourceNotFound;
import com.careersite.careersitemapplan.repository.CourseRepository;
import com.careersite.careersitemapplan.request.CourseRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    CourseRepository courseRepository;


    public List<Course> getAllCourses(){

        return (List<Course>) courseRepository.findAll();
    }

    public Course insertCourse(CourseRequest courseRequest){
        return courseRepository.save(new Course(courseRequest));
    }

    public Course updateCourse(long courseId, CourseRequest courseRequest) {

        return courseRepository.findById(courseId).map(course -> {
            Course courseToBeUpdated = new Course(courseRequest);
            courseToBeUpdated.setId(course.getId());
            return courseRepository.save(courseToBeUpdated);
        }).orElseThrow(()->new ResourceNotFound("Course ID could not be found"));
    }

    public void deleteCourse(long courseId){
        courseRepository.findById(courseId).orElseThrow(()->new ResourceNotFound("Course ID could not be found"));
        courseRepository.deleteById(courseId);
    }
}
