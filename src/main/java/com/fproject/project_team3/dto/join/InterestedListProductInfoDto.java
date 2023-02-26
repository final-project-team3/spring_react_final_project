package com.fproject.project_team3.dto.join;

import lombok.Data;

@Data
public class InterestedListProductInfoDto {
  private String productNum;
  private String productSellerId;
  private String productSellerBusinessName;
  private String productKindNum;
  private String productName;
  private String productPrice;
  private String productContent;
  private String productImg;
  private String productRegistrationDate;
  private String reviewStarPoint;
  private String productDeliveryDay;
  private int countProductNum;
}
