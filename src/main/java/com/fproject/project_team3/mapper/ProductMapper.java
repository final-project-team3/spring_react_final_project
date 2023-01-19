package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.product.ProductKindDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
  List<ProductKindDto> getProductSelectList();

  List<ProductKindDto> getProductSmallSelectList(String productKind);

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
