package com.careersite.careersitemapplan.response;

import com.careersite.careersitemapplan.entity.School;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SchoolResponse {
    private long id;
    private String schoolName;
    private String schoolImgUrl;
    private String region;

    public SchoolResponse(School school){
        id = school.getId();
        schoolName = school.getSchoolName();
        schoolImgUrl = school.getSchoolImgUrl();
        region = school.getRegion();
    }
}

