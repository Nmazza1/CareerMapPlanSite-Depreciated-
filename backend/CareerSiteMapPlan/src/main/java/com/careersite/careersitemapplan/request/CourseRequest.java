package com.careersite.careersitemapplan.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseRequest {

    @NotBlank
    private String schoolName;
    @NotBlank
    private String schoolImgUrl;

    @NotBlank
    private String courseName;
    @NotBlank
    private String courseLink;

    @NotBlank
    private String region;
}
