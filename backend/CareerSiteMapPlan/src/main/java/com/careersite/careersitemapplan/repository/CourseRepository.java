package com.careersite.careersitemapplan.repository;

import com.careersite.careersitemapplan.entity.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends CrudRepository <Course, Long> {
}
