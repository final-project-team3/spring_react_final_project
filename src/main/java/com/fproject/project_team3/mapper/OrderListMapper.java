package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.user.UserOrderListDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface OrderListMapper {
  Object getOrderList(String id) throws Exception;
}
