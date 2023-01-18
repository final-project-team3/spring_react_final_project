package com.fproject.project_team3.service.order;

import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import com.fproject.project_team3.mapper.OrderListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

  @Autowired
  private OrderListMapper orderListMapper;

  @Override
  public List<UserOrderListProductInfoDto> getOrderList(String id) throws Exception {
    return orderListMapper.getOrderList(id);
  }
}
