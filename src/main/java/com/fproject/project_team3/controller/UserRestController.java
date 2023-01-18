package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class UserRestController {
    @Autowired
    private UserService userService;
    //    HSH

    //    HSH

    //    LYS
    @PostMapping("/signUpUser")
    public void signUpUser(UserInfoDto userInfoDto, HttpServletResponse httpServletResponse) throws IOException {
        System.out.println(userInfoDto);
        userService.insertUser(userInfoDto);
        httpServletResponse.sendRedirect("http://localhost:3000/");
    }

    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
