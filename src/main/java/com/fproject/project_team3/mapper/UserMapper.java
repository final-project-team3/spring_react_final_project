package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.user.UserInfoDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    //    HSH

    //    HSH

    //    LYS
//    유저 회원가입
    void insertUser(UserInfoDto userInfoDto);

    String emailCheck(String userId);

    String telCheck(String userTel);
    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
