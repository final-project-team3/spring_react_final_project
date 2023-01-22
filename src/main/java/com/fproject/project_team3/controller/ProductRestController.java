package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
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

    // 파일 업로드

    @RequestMapping(value="/WriteBoard", method= RequestMethod.POST)
    public  Map<String,Object> WriteBoard (HttpServletRequest request,
                                           @RequestParam(value="file", required=false) MultipartFile[] files
        , @RequestParam(value="tag", required=false) String tag
        , @RequestParam(value="comment", required=false) String comment) throws SQLException {
        Map<String,Object> resultMap = new HashMap<String,Object>();
        String FileNames ="";
        System.out.println("paramMap =>"+files[0]);
        System.out.println("paramMap =>"+tag);
        System.out.println("paramMap =>"+comment);
        String filepath = "C:/cookingapp/churchfront/public/image/saveFolder/";
        for (MultipartFile mf : files) {

            String originFileName = mf.getOriginalFilename(); // 원본 파일 명
            long fileSize = mf.getSize(); // 파일 사이즈

            System.out.println("originFileName : " + originFileName);
            System.out.println("fileSize : " + fileSize);

            String safeFile =System.currentTimeMillis() + originFileName;

            FileNames = FileNames+","+safeFile;
            try {
                File f1 = new File(filepath+safeFile);
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
        System.out.println("FileNames =>"+ FileNames);
        paramMap.put("comment", comment);
        paramMap.put("FileNames", FileNames);
        paramMap.put("tag", tag);
        resultMap.put("JavaData", paramMap);
        return resultMap;
    }

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
