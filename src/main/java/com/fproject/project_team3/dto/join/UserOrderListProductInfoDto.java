package com.fproject.project_team3.dto.join;

import lombok.Data;

@Data
public class UserOrderListProductInfoDto {
    int userOrderListNum;
    String userId;
    int productNum;
    int productOrderQuantity;
    String userOrderDate;
    String userOrderState;
    String orderNum;
    String productName;
}
