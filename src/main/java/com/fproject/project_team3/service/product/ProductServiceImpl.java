package com.fproject.project_team3.service.product;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.gwak.TFileDto;
import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    // 상품 등록 → DB 저장
    @Override
    public void insertProductData(String productName, int productKindNum, int productQty, String productSellerId, int productPrice) throws Exception {
        productMapper.insertProductData(productName, productKindNum, productQty, productSellerId, productPrice);
    }

    // 제품 중복 확인
    @Override
    public int checkProductName(String productName, String productSellerId) throws Exception {
        return productMapper.checkProductName(productName, productSellerId);
    }

    //    GJY

    //    BJH

    //    BJH
}
