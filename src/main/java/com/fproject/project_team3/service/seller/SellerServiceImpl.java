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