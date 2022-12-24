package com.careersite.careersitemapplan.controller;

import com.careersite.careersitemapplan.entity.Course;
import com.careersite.careersitemapplan.entity.School;
import com.careersite.careersitemapplan.repository.CourseRepository;
import com.careersite.careersitemapplan.request.CourseRequest;
import com.careersite.careersitemapplan.response.CourseResponse;
import com.careersite.careersitemapplan.service.CourseService;
import jakarta.validation.Valid;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    CourseService courseService;

    @GetMapping()
    public List<CourseResponse> getAllCourses(@RequestParam(required = false)Integer prereq, @RequestParam(required = false)String region){

        List<Course> courses = courseService.getAllCourses(prereq, region);
        List<CourseResponse> courseResponse = new ArrayList<>();

        courses.forEach(course -> {
            courseResponse.add(new CourseResponse(course));
        });

        return courseResponse;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public CourseResponse addCourse(@RequestBody CourseRequest courseRequest){
        Course course = courseService.insertCourse(courseRequest);

        return new CourseResponse(course);
    }

    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable long id, @Valid @RequestBody CourseRequest courseRequest){
        Course course = courseService.updateCourse(id, courseRequest);

        return course;
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable long id){
        courseService.deleteCourse(id);
    }
}
