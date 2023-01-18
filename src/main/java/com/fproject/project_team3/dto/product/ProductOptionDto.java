package com.fproject.project_team3.dto.product;

import lombok.Data;

@Data
public class ProductOptionDto {
    int productOptionNum;
    int productNum;
    String productCouponUseable;
    String productOptionColor;
    String productOptionSize;
    int productQuantity;
}
