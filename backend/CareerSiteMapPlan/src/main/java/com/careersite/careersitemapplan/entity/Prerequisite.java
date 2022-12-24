package com.careersite.careersitemapplan.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "prerequisites")
public class Prerequisite {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "took_high_math")
    private boolean tookHighMath;

    @Column(name = "took_high_science")
    private boolean tookHighScience;

    @Column(name = "took_physics")
    private boolean tookPhysics;

    @Column(name = "took_chemistry")
    private boolean tookChemistry;



}
