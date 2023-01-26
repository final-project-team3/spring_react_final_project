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
import java.util.Map;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  private ProductMapper productMapper;
  @Override
  public List<ProductKindDto> getProductSelectList() throws Exception {
    return productMapper.getProductSelectList();
  }

  @Override
  public List<ProductKindDto> getProductSmallSelectList(String productKind) throws Exception {
    return productMapper.getProductSmallSelectList(productKind);
  }

  @Override
  public void insertProductData(String productName, String selectBigKind, String selectSmallKind) throws Exception {
    productMapper.insertProductData(productName, selectBigKind, selectSmallKind);
  }


//  @Override
//  public void insertProduct(ProductInfoDto productInfoDto) {
//
//  }

//  @Override
//  public TFileDto selectBoardFileInfo(int idx, int boardIdx) throws Exception {
//    return null;
//  }

//  @Override
//  public void getSelectTestData(String img) throws Exception {
//    productMapper.getSelectTestData(img);
//  }


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
