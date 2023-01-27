package com.fproject.project_team3.service.product;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.product.ProductKindDto;

import java.util.List;

public interface ProductService {
  List<ProductKindDto> getProductSelectList() throws Exception;

  List<ProductKindDto> getProductSmallSelectList(String productKind) throws Exception;

  List<GwakTestTblDto> getSelectTestData(byte img) throws Exception;

  List<ProductKindDto> getKind();

  List<ProductKindDto> getSmallKind(String productBigKind);

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
