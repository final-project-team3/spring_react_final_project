package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.service.email.EmailService;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserRestController {
    @Autowired
    private UserService userService;

    //    HSH
    @PostMapping("/userLogin")
    public Object userLogin(@RequestParam("id") String id, @RequestParam("pass") String pass) {
        return userService.userLogin(id, pass);
    }
    //    HSH

    //    LYS
    @PostMapping("/signUpUser")
    public void signUpUser(UserInfoDto userInfoDto, HttpServletResponse httpServletResponse) throws IOException {
        System.out.println(userInfoDto);
        userService.insertUser(userInfoDto);
        httpServletResponse.sendRedirect("http://localhost:3000/");
    }

    @PostMapping("/getUserInfo")
    public Object getUserInfo(@RequestParam("userId") String userId) {
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
        if (Id == null) {
            return "";
        }
        return Id;
    }

    @PostMapping("/telCheck")
    public Object telCheck(@RequestParam("telData") String userTel) {
        System.out.println(userTel);
        String Tel = userService.telCheck(userTel);
        if (Tel == null) {
            return "";
        }
        return Tel;
    }

    @PostMapping("/getEmailUserInfo")
    public Map<String, Object> getEmailUserInfo(@RequestParam("email") String email) {
        System.out.println(userService.getEmailUserInfo(email));
        return userService.getEmailUserInfo(email);
    }

    @PostMapping("/postPassMail")
    public void postPassMail(@RequestParam("mail") String mail) throws Exception {
        userService.postPassMail(mail);
    }

    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
