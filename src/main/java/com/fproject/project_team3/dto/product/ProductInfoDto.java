package com.fproject.project_team3.dto.product;

import lombok.Data;

@Data
public class ProductInfoDto {
    int productNum;
    String productName;
    String productPrice;
    String productSellerId;
    String productRegistrationDate;
    String productMainKind;
    String productSubKind;
    String productImg;
    String productContent;
    String reviewStarPoint;
    String productGender;
    String productDeliveryDay;
}
