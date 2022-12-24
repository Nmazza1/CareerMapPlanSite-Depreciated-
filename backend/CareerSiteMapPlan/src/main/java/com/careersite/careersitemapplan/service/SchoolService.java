package com.careersite.careersitemapplan.service;

import com.careersite.careersitemapplan.entity.Course;
import com.careersite.careersitemapplan.entity.School;
import com.careersite.careersitemapplan.exception.ResourceNotFound;
import com.careersite.careersitemapplan.repository.CourseRepository;
import com.careersite.careersitemapplan.repository.SchoolRepository;
import com.careersite.careersitemapplan.request.CourseRequest;
import com.careersite.careersitemapplan.request.SchoolRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolService {

    @Autowired
    SchoolRepository schoolRepository;

    @Autowired
    CourseRepository courseRepository;

    public List<School> getAllSchools(String region){
        if(region == null || region.isEmpty())
        return (List<School>) schoolRepository.findAll();
        else{
            return schoolRepository.findAllByRegion(region);
        }
    }

    public School addSchool(SchoolRequest schoolRequest){
        return schoolRepository.save(new School(schoolRequest));
    }

    public School updateSchool(long schoolId, SchoolRequest schoolRequest){
        return schoolRepository.findById(schoolId).map(school -> {
            School schoolToBeUpdated = new School(schoolRequest);
            schoolToBeUpdated.setId(school.getId());
            return schoolRepository.save(schoolToBeUpdated);
        }).orElseThrow(()->new ResourceNotFound("School Not Found"));
    }

    public void deleteSchool(long schoolId){
        schoolRepository.findById(schoolId).orElseThrow(()->new ResourceNotFound("School Not Found"));
        schoolRepository.deleteById(schoolId);
    }

    public Course addCourseToSchool(long schoolId, CourseRequest courseRequest){
        School school = schoolRepository.findById(schoolId)
                .orElseThrow(()->new ResourceNotFound("School Not Found"));
        Course courseToBeAdded = new Course(courseRequest);
        courseToBeAdded.setSchool(school);
        return courseRepository.save(courseToBeAdded);
    }

}
