package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.gwak.GwakTestTblDto;
import com.fproject.project_team3.dto.gwak.TFileDto;
import com.fproject.project_team3.dto.join.UserOrderListProductInfoDto;
import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.product.ProductKindDto;
import com.fproject.project_team3.service.product.ProductService;
import jdk.jfr.ContentType;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
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

  // 상품 등록 → DB 저장
  @PostMapping("/productDataIntoDB")
  public void insertProductData(@RequestParam("productName") String productName, @RequestParam("selectBigKind") String selectBigKind, @RequestParam("selectSmallKind") String selectSmallKind) throws Exception {
    productService.insertProductData(productName, selectBigKind, selectSmallKind);
    System.out.println(productName);
    System.out.println(selectBigKind);
    System.out.println(selectSmallKind);
//    System.out.println(productQty);
  }



//    @PostMapping("/testData")
//    public List<GwakTestTblDto> selectTestData(@RequestParam("idx") int idx) throws Exception {
//        List<GwakTestTblDto> testList = productService.getSelectTestData(idx);
//        System.out.println(idx);
//        System.out.println(testList);
//        return testList;
//    }

  // 파일 업로드


//  @RequestMapping(value="/productImgUpload", method=RequestMethod.POST)
//  public Map<String,Object> WriteBoard (HttpServletRequest request,
//                                         @RequestParam(value="file", required=false) MultipartFile[] files ) throws SQLException  {
//    Map<String,Object> resultMap = new HashMap<String,Object>();
//    String FileNames ="";
//    System.out.println("paramMap =>"+files[0]);
//    String filepath = "C:/saveFolder/";
//    for (MultipartFile mf : files) {
//
//      String originFileName = mf.getOriginalFilename(); // 원본 파일 명
//      long fileSize = mf.getSize(); // 파일 사이즈
//
//      System.out.println("originFileName : " + originFileName);
//      System.out.println("fileSize : " + fileSize);
//
//      String safeFile =System.currentTimeMillis() + originFileName;
//
//      FileNames = FileNames+","+safeFile;
//      try {
//        File f1 = new File(filepath+safeFile);
//        mf.transferTo(f1);
//        System.out.println(FileNames);
//      } catch (Exception e) {
//        System.out.println("에러 발생");
//        e.printStackTrace();
//      }
//
//    }
//    Map<String, Object> paramMap = new HashMap<String, Object>();
//    FileNames = FileNames.substring(1);
//    System.out.println("FileNames =>"+ FileNames);
//    paramMap.put("FileNames", FileNames);
//    resultMap.put("JavaData", paramMap);
//    return resultMap;
//  }

  // 파일 업로드(imgCode)
//  @RequestMapping(value = "/productImgUpload", method = RequestMethod.POST)
//  public String selectTestData(@RequestParam("img") String img) throws Exception {
//    try {
//      productService.getSelectTestData(img);
//      return "성공";
//    }
//    catch(Exception e) {
//      e.printStackTrace();
//      return "살패";
//    }
//    System.out.println("----------------------------------------------------");
//    System.out.println(img);
//    System.out.println("----------------------------------------------------");
//  }

  //    boardWrite 등록 페이지
//    클라이언트에서 업로드된 파일 데이터를 받기 위해서 매개변수로 MultipartHttpServletRequest를 추가함
//  @RequestMapping("/insertProduct")
//  public String insertProduct(@RequestParam("ProductInfoDto") ProductInfoDto productInfoDto, MultipartHttpServletRequest multipart) throws Exception {
////        업로드된 파일 데이터를 서비스 영역에서 처리하기 위해서 매개변수를 추가
//    productService.insertProduct(productInfoDto);
//
//    return "redirect:/board/openBoardList";
//  }

//  @RequestMapping("/downloadBoardFile")
//  public void downloadBoardFile(@RequestParam int idx, @RequestParam int boardIdx, HttpServletResponse response) throws Exception {
//    TFileDto boardFile = productService.selectBoardFileInfo(idx, boardIdx);
//
//    if (ObjectUtils.isEmpty(boardFile) == false) {
//      String fileName = boardFile.getOriginalFileName();
//
//      byte[] files = FileUtils.readFileToByteArray(new File(boardFile.getStoredFilePath()));
//
//      response.setContentType("application/octet-stream");
//      response.setContentLength(files.length);
//      response.setHeader("Content-Disposition", "attachment; fileName=\"" + URLEncoder.encode(fileName, "UTF-8") + "\";");
//      response.getOutputStream().write(files);
//      response.getOutputStream().flush();
//      response.getOutputStream().close();
//    }
//  }

  //    GJY

  //    BJH

  //    BJH

  //    LSH

  //    LSH
}
