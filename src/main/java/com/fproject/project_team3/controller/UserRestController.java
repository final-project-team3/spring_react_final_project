package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @PostMapping("/emailCheck")
    public Object emailCheck(@RequestParam("email") String userId) {
        String Id = userService.emailCheck(userId);
        if(Id == null) {
            return "";
        }
        return Id;
    }

    @PostMapping("/telCheck")
    public Object telCheck(@RequestParam("telData") String userTel){
        System.out.println(userTel);
        String Tel = userService.telCheck(userTel);
        if(Tel == null){
            return "";
        }
        return Tel;
    }

    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
