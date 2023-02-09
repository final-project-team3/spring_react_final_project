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
  public List<UserInfoProductInfoDto> gender13Count(int productNum) {
    return orderListMapper.gender13Count(productNum);
  }


  // GJY
}
