package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Mapper
public interface ProductMapper {
  List<ProductKindDto> getProductSelectList();

  List<ProductKindDto> getProductSmallSelectList(String productKind);

  void insertProductData(String productName, String selectBigKind, String selectSmallKind) throws Exception;


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
