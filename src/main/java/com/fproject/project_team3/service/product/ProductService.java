package com.fproject.project_team3.service.product;

import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.dto.product.ProductOptionDto;
import com.fproject.project_team3.dto.product.SearchDto;
import com.fproject.project_team3.dto.seller.SellerInfoDto;

import java.util.List;

public interface ProductService {


    //    HSH
    List<ProductKindDto> getKind();

    List<ProductKindDto> getSmallKind(String productBigKind);

    List<ProductInfoDto> getSearchProductList(String searchContent);

    void productOptionInsert(List<ProductOptionDto> productOptionDto);

    List<ProductInfoDto> getSellerProductList(String productSellerBusinessName);

    List<ProductInfoDto> getLikeProducts(String userId);

    void deleteProductLikeItem(String userId,int productNum);

    SellerInfoDto getProductSellerInfo(int productNum);

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

    List<ProductInfoDto> getProductList();

    ProductInfoDto getProductInfoFromDetail(int productNum);

    List<ProductOptionDto> getProductOptionList(int productNum);

    SellerInfoDto getSellerNameToSellerInfo(String productSellerBusinessName);

    String productInfoInsert(ProductInfoDto productInfoDto);

    List<ProductInfoDto> categoryProductList(String bigKind, String smallKind);

    ProductInfoDto getProductInfo(String productSellerId, String productName);

    ProductKindDto getProductKind(int productKindNum);

    List<ProductOptionDto> selectOptionData(int productNum);

    void editDataUpdate(Object productInfoOptionDto, String my);

    void searchContentTotalInsert(String searchContent);

    List<SearchDto> getSearchTotal10();

    int productInterestedInsert(String userId, int productNum);

    List<ProductInfoDto> thisMonthData();

    List<ProductInfoDto> randomData();

    List<ProductInfoDto> getSellerIdProductList(String sellerId);

    void deleteProduct(int productNum);


    //    GJY

    //    BJH

    //    BJH
}
