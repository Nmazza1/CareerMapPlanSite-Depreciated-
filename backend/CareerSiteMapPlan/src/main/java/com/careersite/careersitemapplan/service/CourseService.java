package com.careersite.careersitemapplan.service;

import com.careersite.careersitemapplan.entity.Course;
import com.careersite.careersitemapplan.entity.School;
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


    public List<Course> getAllCoursesForSchool(Long school_id, Integer prerequisite, String region){


        if(!(prerequisite == null || prerequisite.describeConstable().isEmpty()) && !(region == null || region.isEmpty()))
        {
            return courseRepository.findAllByPrerequisiteAndSchool_RegionAndIdSchool(prerequisite, region,school_id );
        }
       else if(!(prerequisite == null || prerequisite.describeConstable().isEmpty()))
        {
            return courseRepository.findAllByPrerequisite(prerequisite);
        }
        else


        {
            return (List<Course>) courseRepository.findBySchool_Id(school_id);
        }

    }

    public List<Course> getAllCourses(Integer prerequisite, String region){


        if(!(prerequisite == null || prerequisite.describeConstable().isEmpty()) && !(region == null || region.isEmpty()))
        {
            return courseRepository.findAllByPrerequisiteAndSchool_Region(prerequisite, region);
        }
        else if(!(prerequisite == null || prerequisite.describeConstable().isEmpty()))
        {
            return courseRepository.findAllByPrerequisite(prerequisite);
        }
        else
        {
            return (List<Course>) courseRepository.findAll();
        }

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
