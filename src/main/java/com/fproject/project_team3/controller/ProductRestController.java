package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.join.ProductInfoOptionDto;
import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.dto.product.ProductOptionDto;
import com.fproject.project_team3.dto.seller.SellerInfoDto;
import com.fproject.project_team3.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class ProductRestController {
    @Autowired
    private ProductService productService;

    //    HSH
    @PostMapping("/getKind")
    public List<ProductKindDto> getKind() {
        return productService.getKind();
    }

    @PostMapping("/getSmallKind")
    public List<ProductKindDto> getSmallKind(@RequestParam("bigKind") String productBigKind) {
        return productService.getSmallKind(productBigKind);
    }

    //    검색
    @PostMapping("/getSearchProductList")
    public List<ProductInfoDto> getSearchProductList(@RequestParam("searchContent") String searchContent) {
        return productService.getSearchProductList(searchContent);
    }

    //    제품 정보 넣기
    @PostMapping("/productInfoInsert")
    public String productInfoInsert(@RequestBody ProductInfoDto productInfoDto) {
        return productService.productInfoInsert(productInfoDto);
    }

    @GetMapping("/categoryProductList")
    public List<ProductInfoDto> categoryProductList(@RequestParam("bigKind") String bigKind, @RequestParam("smallKind") String smallKind) {
        return productService.categoryProductList(bigKind, smallKind);
    }

    @PostMapping("/productOptionInsert")
    public void productOptionInsert(@RequestBody List<ProductOptionDto> productOptionDto) {
        System.out.println(productOptionDto);
        productService.productOptionInsert(productOptionDto);
    }

    //    제품들 가져오기
    @GetMapping("/getProductList")
    public List<ProductInfoDto> getProductList() {
        return productService.getProductList();
    }

    //    제품 번호를 기준으로 한 제품정보 가져오기
    @GetMapping("/getProductInfoFromDetail")
    public Object getProductInfoFromDetail(@RequestParam("productNum") int productNum) {
        Map<String, Object> productInfoOption = new HashMap<>();
        List<ProductOptionDto> productOptionList = productService.getProductOptionList(productNum);

        productInfoOption.put("productInfo", productService.getProductInfoFromDetail(productNum));
        productInfoOption.put("productOption", productOptionList);
        return productInfoOption;
    }

//    사업자 이름으로 제품 / 사업자 정보 가져오기
    @GetMapping("/getSellerProductList")
    public Object getSellerProductList(@RequestParam("productSellerBusinessName") String productSellerBusinessName) {
        Map<String,Object> productInfoSellerInfo = new HashMap<>();
        List<ProductInfoDto> productInfoList = productService.getSellerProductList(productSellerBusinessName);
        SellerInfoDto sellerInfo = productService.getSellerNameToSellerInfo(productSellerBusinessName);

        productInfoSellerInfo.put("sellerProductList", productInfoList);
        productInfoSellerInfo.put("sellerInfo", sellerInfo);

        System.out.println(productInfoSellerInfo);

        return productInfoSellerInfo;
    }

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
//        System.out.println(productKind);
        List<ProductKindDto> productSelectList = productService.getProductSmallSelectList(productKind);
//        System.out.println(productSelectList);
        return productSelectList;
    }

    // 상품 등록 → DB 저장
    @PostMapping("/productDataIntoDB")
    public void insertProductData(@RequestBody ArrayList<Object> listObj) throws Exception {

        System.out.println(listObj);
        System.out.println(listObj.get(0));
        List<Object> test1 = listObj;

        Map<String, Object> test2 = new HashMap<>();

        for (int i = 0; i < test1.size(); i++) {
//            test2 = (HashMap) test1.get(i);
            test2.put(String.valueOf(i), test1.get(i));

            System.out.println(test2.get(String.valueOf(i)));
//            productService.insertProductData();

        }
    }

    // 제품 중복확인
    @PostMapping("/productNameCheck")
    public int checkProductName(@RequestParam("productName") String productName, @RequestParam("productSellerId") String productSellerId) throws Exception {
        System.out.println(productName);
        System.out.println(productSellerId);
        int checkCnt = productService.checkProductName(productName, productSellerId);
        return checkCnt;
    }

    // 옵션데이터
    @PostMapping("/submitOption")
    public String submitOption(@RequestParam("users") String users) throws Exception {
        System.out.println("----------------------");
        System.out.println(users);
        System.out.println("----------------------");
        return null;
    }

    // 상품 수정하기 (선택한 상품명의 데이터 가져오기)
    @PostMapping("/selectProductInfo")
    public ProductInfoDto selectProductInfo(@RequestParam("productSellerId") String productSellerId, @RequestParam("productName") String productName) {
        ProductInfoDto ProductInfoDto = productService.getProductInfo(productSellerId,productName);
//        System.out.println(productSelectList);
        return ProductInfoDto;
    }

    // 수정할 상품의 카테고리 값 받아오기
    @PostMapping("/selectProductKindInfo")
    public ProductKindDto selectProductKindInfo(@RequestParam("productKindNum") int productKindNum) {
        ProductKindDto ProductKindDto = productService.getProductKind(productKindNum);
        return ProductKindDto;
    }

    @PostMapping("/selectOptionData")
    public List<ProductOptionDto> selectOptionData(@RequestParam("productNum") int productNum) {

        return productService.selectOptionData(productNum);
    }

    @PostMapping("/editDataUpdate")
    public void editDataUpdate(@RequestBody ProductInfoOptionDto productInfoOptionDto, @RequestParam("my") String my) {
        System.out.println(productInfoOptionDto.getProductName());
//        System.out.println(productInfoOptionDto.getProductOption1());
        productService.editDataUpdate(productInfoOptionDto, my);

    }

    //    GJY

    //    BJH

    //    BJH
}
