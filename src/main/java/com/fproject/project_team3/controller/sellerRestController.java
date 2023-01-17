package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.sellerDto;
import com.fproject.project_team3.service.seller.sellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class sellerRestController {

    @Autowired
    private sellerService sellerService;

    //    HSH
//     사업자 회원가입
    @PostMapping("/signUpSeller")
    public void signUpSeller(sellerDto sellerDto) {
        System.out.println(sellerDto);
        sellerService.insertSeller(sellerDto);
    }
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
