package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.seller.SellerInfoDto;
import com.fproject.project_team3.service.seller.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class SellerRestController {

    @Autowired
    private SellerService sellerService;

    //    HSH
//     사업자 회원가입
    @PostMapping("/signUpSeller")
    public void signUpSeller(SellerInfoDto sellerInfoDto, HttpServletResponse httpServletResponse) throws Exception {
        System.out.println(sellerInfoDto);
        sellerService.insertSeller(sellerInfoDto);
        httpServletResponse.sendRedirect("http://localhost:3000/");
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
