package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.service.user.UserService;
import org.apache.ibatis.annotations.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

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

    @PostMapping("/getUserInfo")
    public Object getUserInfo(@RequestParam("userId") String userId){
        System.out.println(userId);
        System.out.println(userService.getUserInfo(userId));
        return userService.getUserInfo(userId);
    }

    @PostMapping("/userInfoUpdate")
    public void userInfoUpdate(UserInfoDto userInfoDto, HttpServletResponse httpServletResponse) throws IOException {
        userService.userInfoUpdate(userInfoDto);
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
