package com.fproject.project_team3.service.user;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public void insertUser(UserInfoDto userInfoDto) {userMapper.insertUser(userInfoDto);}

    @Override
    public String emailCheck(String userId) {
        return userMapper.emailCheck(userId);
    }

    @Override
    public String telCheck(String userTel) {
        return userMapper.telCheck(userTel);
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
