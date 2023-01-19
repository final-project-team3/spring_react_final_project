package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderListMapper {
  List<UserOrderListProductInfoDto> getOrderList(String id) throws Exception;
}
