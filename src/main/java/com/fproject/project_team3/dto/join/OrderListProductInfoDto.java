package com.fproject.project_team3.dto.join;

import lombok.Data;

@Data
public class OrderListProductInfoDto {
  private int userOrderListNum;
  private String userId;
  private int productNum;
  private int productOrderQuantity;
  private String userOrderDate;
  private String userOrderState;
  private String orderNum;
  private String orderPrice;
}
