package com.fproject.project_team3.service.order;


import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;

import java.util.List;

public interface OrderService {
  List<UserOrderListProductInfoDto> getOrderList(String id) throws Exception;
}
