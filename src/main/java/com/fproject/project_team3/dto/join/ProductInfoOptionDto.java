package com.fproject.project_team3.dto.join;

import lombok.Data;

@Data
public class ProductInfoOptionDto {
  int productOptionNum;
  int productNum;
  String productCouponUseable;
  String productOption1;
  String productOption2;
  int productQuantity;
  String productOptionPrice;
  private String productSellerId;
  private int productKindNum;
  private String productName;
  private String productPrice;
  private String productContent;
  private String productImg;
  private String productRegistrationDate;
  private String reviewStarPoint;
  private String productDeliveryDay;
  private String productSellerBusinessName;
}
