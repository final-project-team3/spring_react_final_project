package com.fproject.project_team3.service.product;
import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
  public List<GwakTestTblDto> getSelectTestData(byte img) throws Exception {
    return productMapper.getSelectTestData(img);
  }

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
