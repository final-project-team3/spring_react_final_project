package com.fproject.project_team3.service.order;

import com.fproject.project_team3.dto.user.UserOrderListDto;
import com.fproject.project_team3.mapper.OrderListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OrderServiceImpl implements OrderService {

  @Autowired
  private OrderListMapper orderListMapper;

  @Override
  public Object getOrderList(String id) throws Exception {
    return orderListMapper.getOrderList(id);
  }
}
