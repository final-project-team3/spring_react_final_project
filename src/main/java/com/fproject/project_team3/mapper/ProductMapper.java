package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.dto.product.ProductOptionDto;
import com.fproject.project_team3.dto.seller.SellerInfoDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {


    //    HSH
    List<ProductKindDto> getKind();

    List<ProductKindDto> getSmallKind(String productBigKind);

    List<ProductInfoDto> getSearchProductList(String searchContent);

    void productInfoInsert(ProductInfoDto productInfo);

    String getProductInfoLatest();

//    void productOptionInsert(int productNum, String productCouponUseable, String productOption1, String productOption2, String productQuantity, String productOptionPrice);

    void productOptionInsert(List<ProductOptionDto> productOptionDto);

    List<ProductInfoDto> getProductList();

    ProductInfoDto getProductInfoFromDetail(int productNum);

    List<ProductOptionDto> getProductOptionList(int productNum);
    //    HSH

    //    LYS

    //    LYS

    //    GJY
    List<ProductKindDto> getProductSelectList();

    List<ProductKindDto> getProductSmallSelectList(String productKind);

    List<GwakTestTblDto> getSelectTestData(byte img) throws Exception;

    // 상품 등록 → DB 저장
    void insertProductData(String productName, int productKindNum, int productQty, String productSellerId, int productPrice) throws Exception;

    int checkProductName(String productName, String productSellerId) throws Exception;

    List<ProductInfoDto> getSellerProductList(String productSellerBusinessName);

    SellerInfoDto getSellerNameToSellerInfo(String productSellerBusinessName);

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
