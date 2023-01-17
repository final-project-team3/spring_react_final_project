package com.fproject.project_team3.service.user;

import com.fproject.project_team3.dto.user.userInfoDto;
import com.fproject.project_team3.mapper.userMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userServiceImpl implements userService {
    @Autowired
    private userMapper userMapper;

    @Override
    public void insertUser(userInfoDto userInfoDto) {userMapper.insertUser(userInfoDto);}

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
