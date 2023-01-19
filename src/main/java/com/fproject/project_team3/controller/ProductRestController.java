package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductRestController {
  @Autowired
  private ProductService productService;

    //    HSH

    //    HSH

    //    LYS

    //    LYS

    //    GJY
  @PostMapping("/selectList")
public List<ProductKindDto> productSelectList() throws Exception {
    List<ProductKindDto> productSelectList = productService.getProductSelectList();
    return productSelectList;
  }

  @PostMapping("/selectSmallList")
  public List<ProductKindDto> selectSmallList(@RequestParam("productKind") String productKind) throws Exception {
    System.out.println(productKind);
    List<ProductKindDto> productSelectList = productService.getProductSmallSelectList(productKind);
    System.out.println(productSelectList);
    return productSelectList;
  }
    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
