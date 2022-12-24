package com.careersite.careersitemapplan.repository;

import com.careersite.careersitemapplan.entity.Course;
import com.careersite.careersitemapplan.entity.School;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SchoolRepository extends CrudRepository<School, Long> {
    List<School> findAllByRegion(String region);
}
