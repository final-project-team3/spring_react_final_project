package com.fproject.project_team3.service.order;

import com.fproject.project_team3.dto.join.InterestedListProductInfoDto;
import com.fproject.project_team3.dto.join.OrderListProductInfoDto;
import com.fproject.project_team3.dto.join.UserInfoProductInfoDto;
import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import com.fproject.project_team3.mapper.OrderListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

  @Autowired
  private OrderListMapper orderListMapper;


  // GJY

  @Override
  public List<UserOrderListProductInfoDto> getOrderList(String id) throws Exception {
    return orderListMapper.getOrderList(id);
  }

  @Override
  public List<OrderListProductInfoDto> getPayUserList(String sellerBusinessName) {
    return orderListMapper.getPayUserList(sellerBusinessName);
  }

  @Override
  public List<InterestedListProductInfoDto> getInterestedUserList(String sellerBusinessName) {
    return orderListMapper.getInterestedUserList(sellerBusinessName);
  }

  @Override
  public List<UserInfoProductInfoDto> getZzimDetail(int productNum) {
    return orderListMapper.getZzimDetail(productNum);
  }

  @Override
  public int gender13Count(int productNum) {
    int count13 = orderListMapper.gender13Count(productNum);
    return count13;
  }

  @Override
  public int gender24Count(int productNum) {
    int count24 = orderListMapper.gender24Count(productNum);
    return count24;
  }


  // GJY
}
