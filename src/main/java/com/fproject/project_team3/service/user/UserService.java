package com.fproject.project_team3.service.user;

import com.fproject.project_team3.dto.user.UserInfoDto;

import java.util.List;

public interface UserService {

    void insertUser(UserInfoDto userInfoDto);
    
    String emailCheck(String userId);

    String telCheck(String userTel);

    UserInfoDto getUserInfo(String userId);

    void userInfoUpdate(UserInfoDto userInfoDto);


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
