package com.fproject.project_team3.dto.product;

import lombok.Data;

@Data
public class ProductInfoDto {
  private int productNum;
  private String productSellerId;
  private int productKindNum;
  private String productName;
  private int productPrice;
  private String productContent;
  private String productImg;
  private String productRegistrationDate;
  private String reviewStarPoint;
  private String productDeliveryDay;
}
