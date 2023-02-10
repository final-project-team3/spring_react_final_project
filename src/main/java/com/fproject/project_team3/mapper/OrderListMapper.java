package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.join.InterestedListProductInfoDto;
import com.fproject.project_team3.dto.join.OrderListProductInfoDto;
import com.fproject.project_team3.dto.join.UserInfoProductInfoDto;
import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderListMapper {
  List<UserOrderListProductInfoDto> getOrderList(String id) throws Exception;

  List<OrderListProductInfoDto> getPayUserList(String sellerId);

  List<InterestedListProductInfoDto> getInterestedUserList(String sellerBusinessName);

  List<UserInfoProductInfoDto> getZzimDetail(int productNum);

  int gender13Count(int productNum);

  int gender24Count(int productNum);
}
