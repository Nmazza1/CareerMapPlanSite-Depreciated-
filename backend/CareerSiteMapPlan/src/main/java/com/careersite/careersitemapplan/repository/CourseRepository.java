package com.careersite.careersitemapplan.repository;

import com.careersite.careersitemapplan.entity.Course;
import com.careersite.careersitemapplan.entity.Prerequisite;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends CrudRepository <Course, Long>, QueryByExampleExecutor<Course> {

    List<Course> findBySchool_Id(long id);
    void deleteBySchool_Id(long id);
    @Query(value = "SELECT * FROM Courses WHERE BITOR(prerequisite , CAST(:prereq AS INTEGER )) <= CAST(:prereq AS INTEGER)"
            , nativeQuery = true)
    List<Course> findAllByPrerequisite(@Param("prereq") Integer prereq);

    List<Course> findAllBySchool_Region(@Param("region") String region);

    @Query(value =
     "SELECT * FROM COURSES INNER JOIN Schools ON Courses.school_id=Schools.id" +
             "  WHERE BITOR(prerequisite , CAST(:prereq AS INTEGER )) <= CAST(:prereq AS INTEGER)" +
             " AND Region = :region"
            , nativeQuery = true)


    List<Course> findAllByPrerequisiteAndSchool_Region(@Param("prereq") Integer prereq, @Param("region") String region);


    @Query(value = "SELECT Course_Link, Course_Name, Prerequisite, Schools.idschool, Schools.School_Name, Schools.Region " +
            "FROM COURSES" +
            " INNER JOIN Schools" +
            " ON Courses.idschool = Schools.idschool" +
            " WHERE BITOR(prerequisite , CAST(:prereq AS INTEGER )) <= CAST(:prereq AS INTEGER)" +
            "AND Region = :region " +
            "AND Schools.idschool = :idschool"

            , nativeQuery = true)
    List<Course> findAllByPrerequisiteAndSchool_RegionAndSchool_Id(@Param("prereq") Integer prereq,
                                                                   @Param("region") String region,
                                                                   @Param("idschool")long idschool);
}
