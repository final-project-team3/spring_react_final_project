package com.fproject.project_team3.service.order;


import com.fproject.project_team3.dto.user.UserOrderListDto;

import java.util.List;

public interface OrderService {
  List<UserOrderListDto> getOrderList(String id) throws Exception;
}
