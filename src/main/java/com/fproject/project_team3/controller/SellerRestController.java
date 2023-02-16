package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.seller.SellerInfoDto;
import com.fproject.project_team3.service.seller.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class SellerRestController {
    String serverUrl = "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080";

    @Autowired
    private SellerService sellerService;

    //    HSH
//     사업자 회원가입
    @PostMapping("/signUpSeller")
    public void signUpSeller(SellerInfoDto sellerInfoDto, HttpServletResponse httpServletResponse) throws Exception {
        System.out.println(sellerInfoDto);
        sellerService.insertSeller(sellerInfoDto);
        httpServletResponse.sendRedirect(serverUrl + "/");
    }
//    사업자 로그인
    @PostMapping("sellerLogin")
    public Object sellerLogin(@RequestParam("id")String id, @RequestParam("pass") String pass) {
        return sellerService.sellerLogin(id,pass);
    }
    //    HSH

    //    LYS
    @PostMapping("/getSellerInfo")
    public Object getUserInfo(@RequestParam("sellerId") String sellerId) {
        System.out.println(sellerId);
        System.out.println(sellerService.getSellerInfo(sellerId));
        return sellerService.getSellerInfo(sellerId);
    }

    @PostMapping("/sellerInfoUpdate")
    public void sellerInfoUpdate(SellerInfoDto sellerInfoDto, HttpServletResponse httpServletResponse) throws IOException {
        sellerService.sellerInfoUpdate(sellerInfoDto);
        httpServletResponse.sendRedirect(serverUrl + "/");
    }

    @PostMapping("/emailCheck2")
    public Object emailCheck(@RequestParam("email") String sellerId) {
        String Id = sellerService.emailCheck(sellerId);
        if (Id == null) {
            return "";
        }
        return Id;
    }

    @PostMapping("/telCheck2")
    public Object telCheck(@RequestParam("telData") String sellerTel) {
        String Tel = sellerService.telCheck(sellerTel);
        if (Tel == null) {
            return "";
        }
        return Tel;
    }

    @PostMapping("/businessNumCheck")
    public Object businessNumCheck(@RequestParam("businessNumData") String sellerBusinessNum) {
        String BNum = sellerService.businessNumCheck(sellerBusinessNum);
        if (BNum == null) {
            return "";
        }
        return BNum;
    }

    @PostMapping("/businessNameCheck")
    public Object businessNameCheck(@RequestParam("businessNameData") String sellerBusinessName){
        String bName = sellerService.businessNameCheck(sellerBusinessName);
        if (bName == null){
            return "";
        }
        return bName;
    }

    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
