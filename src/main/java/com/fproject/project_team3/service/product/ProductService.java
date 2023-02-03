package com.fproject.project_team3.service.product;

import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;

import java.util.List;

public interface ProductService {


    //    HSH
    List<ProductKindDto> getKind();

    List<ProductKindDto> getSmallKind(String productBigKind);

    List<ProductInfoDto> getSearchProductList(String searchContent);

    String productInfoInsert(String productSellerId, String productKindNum, String productName, String productPrice, String productPrice1, String productContent, String productImg, String productStarPoint, String productDeliveryDay);

    void productOptionInsert(int productNum, String productCouponUseable, String productOption1, String productOption2, String productQuantity, String productOptionPrice);

    //    HSH

    //    LYS

    //    LYS

    //    GJY
    List<ProductKindDto> getProductSelectList() throws Exception;

    List<ProductKindDto> getProductSmallSelectList(String productKind) throws Exception;

    // 상품 등록 → DB 저장
//    void insertProductData(String productName, int productKindNum, int productQty, String productSellerId, int productPrice) throws Exception;
    void insertProductData() throws Exception;

    // 제품 중복 확인
    int checkProductName(String productName, String productSellerId) throws Exception;


    //    GJY

    //    BJH

    //    BJH
}
