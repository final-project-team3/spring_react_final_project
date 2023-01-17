package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.seller.sellerInfoDto;
import com.fproject.project_team3.dto.user.userInfoDto;
import com.fproject.project_team3.service.seller.sellerService;
import com.fproject.project_team3.service.user.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class userRestController {
    @Autowired
    private userService userService;
    //    HSH

    //    HSH

    //    LYS
    @PostMapping("/signUpUser")
    public void signUpUser(userInfoDto userInfoDto, HttpServletResponse httpServletResponse) throws IOException {
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
