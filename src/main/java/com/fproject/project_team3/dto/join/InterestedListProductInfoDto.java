package com.fproject.project_team3.dto.join;

import lombok.Data;

@Data
public class InterestedListProductInfoDto {
  int userInterestedListNum;
  int productNum;
  String userId;
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
  private int countProductNum;
  private String userData;
  private String inter;
}
