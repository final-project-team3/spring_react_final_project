package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.user.userOrderList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class OrderRestController {

  // GJY
  // 주문 내역 조회(테이블)
  @GetMapping("/order")
  public List<String> order(){
    return Arrays.asList("서버서버", "뷰뷰");
  }
  // GJY

}
