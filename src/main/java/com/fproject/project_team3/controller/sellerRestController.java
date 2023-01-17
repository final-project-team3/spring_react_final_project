package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.seller.sellerInfoDto;
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
    public String signUpSeller(sellerInfoDto sellerInfoDto) {
        System.out.println(sellerInfoDto);
        sellerService.insertSeller(sellerInfoDto);
        return "redirect:/";
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
