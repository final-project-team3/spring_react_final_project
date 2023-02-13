package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.dto.user.UserInterestedListDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    //    HSH

    //    HSH

    //    LYS
//    유저 회원가입
    void insertUser(UserInfoDto userInfoDto);

    String emailCheck(String userId);

    String telCheck(String userTel);

    UserInfoDto getUserInfo(String userId);

    void userInfoUpdate(UserInfoDto userInfoDto);

    Object userLogin(String id, String pass);

    Object getEmailUserInfo(String email);

    int emailNumCheck(String email);

    void postPassMail(String mail, String newPass);



  //    LYS

    //    GJY
    List<UserInterestedListDto> selectLikeData(String userId);
    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
