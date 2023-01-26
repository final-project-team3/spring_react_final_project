package com.fproject.project_team3.service.product;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.gwak.TFileDto;
import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface ProductService {
  List<ProductKindDto> getProductSelectList() throws Exception;

  List<ProductKindDto> getProductSmallSelectList(String productKind) throws Exception;

  void insertProductData(String productName, String selectBigKind, String selectSmallKind) throws Exception;


//  void insertProduct(ProductInfoDto productInfoDto);

//  TFileDto selectBoardFileInfo(int idx, int boardIdx) throws Exception;

//  void getSelectTestData(String img) throws Exception;

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
