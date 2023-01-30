package com.fproject.project_team3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration;

@SpringBootApplication(exclude = {MultipartAutoConfiguration.class})
public class ProjectTeam3Application {

    public static void main(String[] args) {
        SpringApplication.run(ProjectTeam3Application.class, args);
    }

}