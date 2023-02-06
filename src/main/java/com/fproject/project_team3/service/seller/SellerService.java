package com.fproject.project_team3.service.seller;

import com.fproject.project_team3.dto.seller.SellerInfoDto;

public interface SellerService {


    //    HSH
    void insertSeller(SellerInfoDto sellerInfoDto);
    //    HSH

    //    LYS
    String emailCheck(String sellerId);

    String telCheck(String sellerTel);

    String businessNumCheck(String businessNum);

    SellerInfoDto getSellerInfo(String sellerId);

    void sellerInfoUpdate(SellerInfoDto sellerInfoDto);

    Object sellerLogin(String id, String pass);

    String businessNameCheck(String businessName);

    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
