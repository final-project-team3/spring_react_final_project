package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.join.InterestedListProductInfoDto;
import com.fproject.project_team3.dto.join.OrderListProductInfoDto;
import com.fproject.project_team3.dto.join.UserInfoProductInfoDto;
import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import com.fproject.project_team3.dto.user.UserOrderListDto;
import com.fproject.project_team3.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class OrderRestController {

    @Autowired
    private OrderService orderService;

    // GJY
    // 주문 내역 조회(테이블)
    @PostMapping("/order")
    public List<UserOrderListProductInfoDto> order(@RequestParam("id") String id) throws Exception {
        List<UserOrderListProductInfoDto> userOrderList = orderService.getOrderList(id);
        return userOrderList;
    }

    // 결제 고객 리스트 조회
    @PostMapping("/getPayUserList")
    public List<OrderListProductInfoDto> getPayUserList(@RequestParam("sellerBusinessName") String sellerBusinessName) throws Exception {
        List<OrderListProductInfoDto> getPayUserList = orderService.getPayUserList(sellerBusinessName);
        return getPayUserList;
    }


    // 찜한 고객 리스트 조회
    @PostMapping("/getInterestedUserList")
    public List<InterestedListProductInfoDto> getInterestedUserList(@RequestParam("sellerBusinessName") String sellerBusinessName) throws Exception {
        List<InterestedListProductInfoDto> getInterestedUserList = orderService.getInterestedUserList(sellerBusinessName);
        return getInterestedUserList;
    }

    @PostMapping("/getZzimDetail")
    public List<UserInfoProductInfoDto> getZzimDetail(@RequestParam("productNum") int productNum) throws Exception {
        List<UserInfoProductInfoDto> getZzimDetail = orderService.getZzimDetail(productNum);
        return getZzimDetail;
    }

    @PostMapping("/genderCount")
    public String gender13Count(@RequestParam("productNum") int productNum) throws Exception {
        int gender13Count = orderService.gender13Count(productNum);
        int gender24Count = orderService.gender24Count(productNum);
        int[] genderArrayCount = new int[2];
        genderArrayCount[0] = gender13Count;
        genderArrayCount[1] = gender24Count;
        System.out.println("=========================");
        System.out.println(gender13Count);
        System.out.println(gender24Count);
        String newArray = Arrays.toString(genderArrayCount);
        System.out.println("=========================");
        return newArray;
    }

    @PostMapping("/insertOrderList")
    public void insertOrderList(@RequestBody UserOrderListDto userOrderListDto) {
        orderService.insertOrderList(userOrderListDto);
    }
    // GJY

}
