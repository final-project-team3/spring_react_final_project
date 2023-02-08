package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.join.InterestedListProductInfoDto;
import com.fproject.project_team3.dto.join.OrderListProductInfoDto;
import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import com.fproject.project_team3.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    System.out.println(getPayUserList);
    return getPayUserList;
  }


  // 찜한 고객 리스트 조회
  @PostMapping("/getInterestedUserList")
  public List<InterestedListProductInfoDto> getInterestedUserList(@RequestParam("sellerBusinessName") String sellerBusinessName) throws Exception {
    List<InterestedListProductInfoDto> getInterestedUserList = orderService.getInterestedUserList(sellerBusinessName);
    System.out.println(getInterestedUserList);
    return getInterestedUserList;
  }
  // GJY

}
