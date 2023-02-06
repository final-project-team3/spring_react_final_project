package com.fproject.project_team3.service.product;

import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.dto.product.ProductOptionDto;
import com.fproject.project_team3.dto.seller.SellerInfoDto;
import com.fproject.project_team3.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    //    HSH
    @Override
    public List<ProductKindDto> getKind() {
        return productMapper.getKind();
    }

    @Override
    public List<ProductKindDto> getSmallKind(String productBigKind) {
        return productMapper.getSmallKind(productBigKind);
    }

    @Override
    public List<ProductInfoDto> getSearchProductList(String searchContent) {
        return productMapper.getSearchProductList(searchContent);
    }

    @Override
    public String productInfoInsert(String productSellerId, String productKindNum, String productName, String productPrice, String productPrice1, String productContent, String productImg, String productStarPoint, String productDeliveryDay) {
        productMapper.productInfoInsert(productSellerId, productKindNum, productName, productPrice,productPrice, productContent, productImg, productStarPoint, productDeliveryDay);
        return productMapper.getProductInfoLatest();
    }

//    @Override
//    public void productOptionInsert(int productNum, String productCouponUseable, String productOption1, String productOption2, String productQuantity, String productOptionPrice) {
//        productMapper.productOptionInsert(productNum, productCouponUseable, productOption1, productOption2, productQuantity, productOptionPrice);
//    }

    @Override
    public void productOptionInsert(List<ProductOptionDto> productOptionDto) {
        productMapper.productOptionInsert(productOptionDto);
    }

    @Override
    public List<ProductInfoDto> getSellerProductList(String productSellerBusinessName) {
        return productMapper.getSellerProductList(productSellerBusinessName);
    }

    @Override
    public List<ProductInfoDto> getProductList() {
        return productMapper.getProductList();
    }

    @Override
    public ProductInfoDto getProductInfoFromDetail(int productNum) {
        return productMapper.getProductInfoFromDetail(productNum);
    }

    @Override
    public List<ProductOptionDto> getProductOptionList(int productNum) {
        return productMapper.getProductOptionList(productNum);
    }

    @Override
    public SellerInfoDto getSellerNameToSellerInfo(String productSellerBusinessName) {
        return productMapper.getSellerNameToSellerInfo(productSellerBusinessName);
    }

    //    HSH

    //    LYS

    //    LYS

    //    GJY

    @Override
    public List<ProductKindDto> getProductSelectList() throws Exception {
        return productMapper.getProductSelectList();
    }

    @Override
    public List<ProductKindDto> getProductSmallSelectList(String productKind) throws Exception {
        return productMapper.getProductSmallSelectList(productKind);
    }

    @Override
    public void insertProductData() throws Exception {

    }

    // 상품 등록 → DB 저장
//    @Override
//    public void insertProductData(String productName, int productKindNum, int productQty, String productSellerId, int productPrice) throws Exception {
//        productMapper.insertProductData(productName, productKindNum, productQty, productSellerId, productPrice);
//    }

    // 제품 중복 확인
    @Override
    public int checkProductName(String productName, String productSellerId) throws Exception {
        return productMapper.checkProductName(productName, productSellerId);
    }

    //    GJY

    //    BJH

    //    BJH
}
