package com.fproject.project_team3.service.user;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.dto.user.UserInterestedListDto;

import java.util.List;
import java.util.Map;

public interface UserService {

    void insertUser(UserInfoDto userInfoDto);
    
    String emailCheck(String userId);

    String telCheck(String userTel);

    UserInfoDto getUserInfo(String userId);

    void userInfoUpdate(UserInfoDto userInfoDto);

    Object userLogin(String id, String pass);

    Map<String, Object> getEmailUserInfo(String email);

    void postPassMail(String mail) throws Exception;




    //    HSH

    //    HSH

    //    LYS

    //    LYS

    //    GJY
    List<UserInterestedListDto> selectLikeData(String userId);
    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
