package com.fproject.project_team3.service.order;


import com.fproject.project_team3.dto.user.UserOrderListDto;

import java.util.List;
import java.util.Map;

public interface OrderService {
  Object getOrderList(String id) throws Exception;
}
