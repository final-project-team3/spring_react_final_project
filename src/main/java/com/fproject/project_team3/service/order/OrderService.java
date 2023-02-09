package com.fproject.project_team3.service.order;


import com.fproject.project_team3.dto.join.InterestedListProductInfoDto;
import com.fproject.project_team3.dto.join.OrderListProductInfoDto;
import com.fproject.project_team3.dto.join.UserInfoProductInfoDto;
import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;

import java.util.List;

public interface OrderService {
  List<UserOrderListProductInfoDto> getOrderList(String id) throws Exception;

  List<OrderListProductInfoDto> getPayUserList(String sellerBusinessName);

  List<InterestedListProductInfoDto> getInterestedUserList(String sellerBusinessName);

  List<UserInfoProductInfoDto> getZzimDetail(int productNum);
}
