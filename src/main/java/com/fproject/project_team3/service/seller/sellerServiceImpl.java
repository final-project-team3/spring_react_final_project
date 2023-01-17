package com.fproject.project_team3.service.seller;

import com.fproject.project_team3.dto.seller.sellerInfoDto;
import com.fproject.project_team3.mapper.sellerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class sellerServiceImpl implements sellerService {

    @Autowired
    private sellerMapper sellerMapper;

    @Override
    public void insertSeller(sellerInfoDto sellerDto) {
        sellerMapper.insertSeller(sellerDto);
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
