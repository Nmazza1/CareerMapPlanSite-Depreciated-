package com.careersite.careersitemapplan.controller;

import com.careersite.careersitemapplan.entity.Course;
import com.careersite.careersitemapplan.entity.School;
import com.careersite.careersitemapplan.request.CourseRequest;
import com.careersite.careersitemapplan.request.SchoolRequest;
import com.careersite.careersitemapplan.response.CourseResponse;
import com.careersite.careersitemapplan.response.SchoolResponse;
import com.careersite.careersitemapplan.service.CourseService;
import com.careersite.careersitemapplan.service.SchoolService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/schools")
public class SchoolController {

    @Autowired
    SchoolService schoolService;

    @Autowired
    CourseService courseService;

    @GetMapping()
    public List<SchoolResponse> getAllSchools(@RequestParam(required = false) String region){
        List<School> schools = schoolService.getAllSchools(region);

        List<SchoolResponse> schoolResponse = new ArrayList<>();
        schools.forEach(school -> {
            schoolResponse.add(new SchoolResponse(school));
        });
        return schoolResponse;
    }


    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public SchoolResponse addSchool (@Valid @RequestBody SchoolRequest schoolRequest){
        School school = schoolService.addSchool(schoolRequest);
        return new SchoolResponse(school);
    }

    @PutMapping("/{id}")
    public School updateSchool(@PathVariable long id, @Valid @RequestBody SchoolRequest schoolRequest){
        School school = schoolService.updateSchool(id, schoolRequest);

        return school;
    }

    @DeleteMapping("/{id}")
    public void deleteSchool(@PathVariable long id){
        schoolService.deleteSchool(id);
    }

    @PostMapping("/{schoolId}/courses")
    public CourseResponse addCourse(
            @PathVariable long schoolId,
            @Valid @RequestBody CourseRequest courseRequest
            ){
    return new CourseResponse(
            schoolService.addCourseToSchool(schoolId, courseRequest));

    }

    @GetMapping("/{school_id}/courses")
    public List<CourseResponse> getAllCourses(@PathVariable long school_id, @RequestParam(required = false)Integer prereq, @RequestParam(required = false)String region){

        List<Course> courses = courseService.getAllCoursesForSchool(school_id, prereq, region);
        List<CourseResponse> courseResponse = new ArrayList<>();

        courses.forEach(course -> {
            courseResponse.add(new CourseResponse(course));
        });

        return courseResponse;

    }
}
