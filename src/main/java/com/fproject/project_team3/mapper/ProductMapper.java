package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ProductMapper {
    List<ProductKindDto> getKind();

    List<ProductKindDto> getSmallKind(String productBigKind);

    //    HSH

    //    HSH

    //    LYS

    //    LYS

    //    GJY
    List<ProductKindDto> getProductSelectList();
    List<ProductKindDto> getProductSmallSelectList(String productKind);
    List<GwakTestTblDto> getSelectTestData(byte img) throws Exception;

    // 상품 등록 → DB 저장
    void insertProductData(String productName, int productKindNum, int productQty, String productSellerId, int productPrice) throws Exception;

    int checkProductName(String productName, String productSellerId);
    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
