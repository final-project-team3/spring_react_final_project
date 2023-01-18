package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.user.UserOrderListDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderListMapper {
  List<UserOrderListDto> getOrderList(String id) throws Exception;
}
