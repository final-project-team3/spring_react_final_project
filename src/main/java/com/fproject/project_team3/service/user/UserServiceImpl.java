package com.fproject.project_team3.service.user;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.mapper.UserMapper;
import com.fproject.project_team3.service.email.EmailService;
import com.fproject.project_team3.service.email.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Autowired
    EmailServiceImpl emailServiceImpl;

    @Override
    public void insertUser(UserInfoDto userInfoDto) {
        userMapper.insertUser(userInfoDto);
    }

    @Override
    public String emailCheck(String userId) {
        return userMapper.emailCheck(userId);
    }

    @Override
    public String telCheck(String userTel) {
        return userMapper.telCheck(userTel);
    }

    @Override
    public UserInfoDto getUserInfo(String userId) {
        return userMapper.getUserInfo(userId);
    }

    @Override
    public void userInfoUpdate(UserInfoDto userInfoDto) {
        userMapper.userInfoUpdate(userInfoDto);
    }

    @Override
    public Object userLogin(String id, String pass) {
        return userMapper.userLogin(id, pass);
    }

    @Override
    public Map<String, Object> getEmailUserInfo(String email) {
        Map<String, Object> emailUserMap = new HashMap<>();
        int checkNum = userMapper.emailNumCheck(email);
        emailUserMap.put("checkNum", checkNum);

        if (checkNum == 1) {
            emailUserMap.put("userInfo", userMapper.getEmailUserInfo(email));
        }
        return emailUserMap;
    }

    @Override
    public void postPassMail(String mail) throws Exception {
        String newPass = emailServiceImpl.sendSimpleMessage(mail);
        userMapper.postPassMail(mail, newPass);
    }

    //    HSH

    //    HSH

    //    LYS

    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
