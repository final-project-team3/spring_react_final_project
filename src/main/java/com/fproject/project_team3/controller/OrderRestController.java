package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.seller.SellerInfoDto;
import com.fproject.project_team3.dto.user.UserOrderListDto;
import com.fproject.project_team3.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class OrderRestController {

  @Autowired
  private OrderService orderService;

  // GJY
  // 주문 내역 조회(테이블)
  @PostMapping("/order")
  public Object order(@RequestParam("id") String id, UserOrderListDto userOrderListDto) throws Exception {
    System.out.println(id);
    Object userOrderList = orderService.getOrderList(id);
    System.out.println(userOrderList);
    return userOrderList;
  }
  // GJY

}
