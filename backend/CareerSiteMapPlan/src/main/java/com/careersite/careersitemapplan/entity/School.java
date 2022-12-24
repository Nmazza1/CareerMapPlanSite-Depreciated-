package com.careersite.careersitemapplan.entity;

import com.careersite.careersitemapplan.request.SchoolRequest;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "schools")
public class School {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "school_name", nullable = false)
    private String schoolName;

    @Column(name = "school_img_url", nullable = false)
    private String schoolImgUrl;

    @Column(name = "region", nullable = false)
    private String region;

    public School(SchoolRequest schoolRequest){
        schoolName = schoolRequest.getSchoolName();
        schoolImgUrl = schoolRequest.getSchoolImgUrl();
        region = schoolRequest.getRegion();
    }


}
