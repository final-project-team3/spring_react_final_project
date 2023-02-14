package com.fproject.project_team3.dto.user;

import lombok.Data;

@Data
public class UserOrderListDto {
    int userOrderListNum;
    String userId;
    int productNum;
    int productOrderQuantity;
    String userOrderDate;
    String userOrderState;
    String orderNum;
    String orderPrice;
}
