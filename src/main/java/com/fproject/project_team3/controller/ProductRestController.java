package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public void insertProductData(@RequestParam("productName") String productName, @RequestParam("productKindNum") int productKindNum, @RequestParam("productQty") int productQty, @RequestParam("productSellerId") String productSellerId, @RequestParam("productPrice") int productPrice) throws Exception {
        productService.insertProductData(productName, productKindNum, productQty, productSellerId, productPrice);
        System.out.println(productName);
        System.out.println(productQty);
        System.out.println(productKindNum);
        System.out.println(productSellerId);
        System.out.println(productPrice);
//    System.out.println(productQty);
    }

    // 제품 중복확인
    @PostMapping("/productNameCheck")
    public int checkProductName(@RequestParam("productName") String productName, @RequestParam("productSellerId") String productSellerId) throws Exception {
        System.out.println(productName);
        System.out.println(productSellerId);
        int checkCnt = productService.checkProductName(productName, productSellerId);
        return checkCnt;
    }

    // 파일 업로드

    @RequestMapping(value = "/WriteBoard", method = RequestMethod.POST)
    public Map<String, Object> WriteBoard(HttpServletRequest request,
                                          @RequestParam(value = "file", required = false) MultipartFile[] files
            , @RequestParam(value = "tag", required = false) String tag
            , @RequestParam(value = "comment", required = false) String comment) throws SQLException {
        Map<String, Object> resultMap = new HashMap<String, Object>();
        String FileNames = "";
        System.out.println("paramMap =>" + files[0]);
        System.out.println("paramMap =>" + tag);
        System.out.println("paramMap =>" + comment);
        String filepath = "C:/cookingapp/churchfront/public/image/saveFolder/";
        for (MultipartFile mf : files) {

            String originFileName = mf.getOriginalFilename(); // 원본 파일 명
            long fileSize = mf.getSize(); // 파일 사이즈

            System.out.println("originFileName : " + originFileName);
            System.out.println("fileSize : " + fileSize);

            String safeFile = System.currentTimeMillis() + originFileName;

            FileNames = FileNames + "," + safeFile;
            try {
                File f1 = new File(filepath + safeFile);
                mf.transferTo(f1);
            } catch (IllegalStateException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
        Map<String, Object> paramMap = new HashMap<String, Object>();
        FileNames = FileNames.substring(1);
        System.out.println("FileNames =>" + FileNames);
        paramMap.put("comment", comment);
        paramMap.put("FileNames", FileNames);
        paramMap.put("tag", tag);
        resultMap.put("JavaData", paramMap);
        return resultMap;
    }

    // 파일 업로드(imgCode)
//    @RequestMapping(value="/productImgUpload", method= RequestMethod.POST)
//    public List<GwakTestTblDto> selectTestData(@RequestParam("img") byte img) throws Exception {
//        List<GwakTestTblDto> testList = productService.getSelectTestData(img);
//        System.out.println(img);
//        System.out.println(testList);
//        return testList;
//    }

    //    GJY

    //    BJH

    //    BJH
}
