package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.seller.SellerInfoDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SellerMapper {


    //    HSH
//     사업자 회원가입
    void insertSeller(SellerInfoDto sellerInfoDto);

    String emailCheck(String sellerId);

    String telCheck(String sellerTel);

    String businessNumCheck(String businessNum);

    SellerInfoDto getSellerInfo(String sellerId);

    void sellerInfoUpdate(SellerInfoDto sellerInfoDto);

    Object sellerLogin(String id, String pass);

    String businessNameCheck(String businessName);
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
