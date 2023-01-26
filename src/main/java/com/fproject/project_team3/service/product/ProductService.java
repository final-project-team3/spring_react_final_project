package com.fproject.project_team3.service.product;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.product.ProductKindDto;

import java.util.List;
import java.util.Map;

public interface ProductService {
  List<ProductKindDto> getProductSelectList() throws Exception;

  List<ProductKindDto> getProductSmallSelectList(String productKind) throws Exception;

  List<GwakTestTblDto> getSelectTestData(byte img) throws Exception;

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
