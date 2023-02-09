package com.fproject.project_team3.dto.join;

import lombok.Data;

@Data
public class UserInfoProductInfoDto {
  int userInfoNum;
  String userId;
  String userPass;
  String userName;
  String userTel;
  String userBirth;
  String userGender;
  String userAddrNum;
  String userAddrJibun;
  String userAddrRoad;
  String userAddrDetail;
  private int productNum;
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
