package com.fproject.project_team3.service.seller;

import com.fproject.project_team3.dto.seller.SellerInfoDto;
import com.fproject.project_team3.mapper.SellerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerServiceImpl implements SellerService {

    @Autowired
    private SellerMapper sellerMapper;

    @Override
    public void insertSeller(SellerInfoDto sellerInfoDto) {
        sellerMapper.insertSeller(sellerInfoDto);
    }

    @Override
    public String emailCheck(String sellerId) { return sellerMapper.emailCheck(sellerId); }

    @Override
    public String telCheck(String sellerTel) {
        return sellerMapper.telCheck(sellerTel);
    }

    @Override
    public String businessNumCheck(String businessNum) { return sellerMapper.businessNumCheck(businessNum); }

    @Override
    public SellerInfoDto getSellerInfo(String sellerId) {
        return sellerMapper.getSellerInfo(sellerId);
    }

    @Override
    public void sellerInfoUpdate(SellerInfoDto sellerInfoDto) {
        sellerMapper.sellerInfoUpdate(sellerInfoDto);
    }

    @Override
    public Object sellerLogin(String id, String pass) {
        return sellerMapper.sellerLogin(id,pass);
    }

    @Override
    public String businessNameCheck(String businessName) { return sellerMapper.businessNameCheck(businessName); }

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
