package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ProductMapper {
    List<ProductKindDto> getProductSelectList();

    List<ProductKindDto> getProductSmallSelectList(String productKind);

    List<GwakTestTblDto> getSelectTestData(byte img) throws Exception;

    List<ProductKindDto> getKind();

    List<ProductKindDto> getSmallKind(String productBigKind);

    List<ProductInfoDto> getSearchProductList(String searchContent);

    //    HSH

    //    HSH

    //    LYS

    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
