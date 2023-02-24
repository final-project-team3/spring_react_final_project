package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.userAndseller.QnaDto;
import com.fproject.project_team3.service.qna.QnaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
public class QnaController {
    String serverUrl = "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080";
    @Autowired
    private QnaService qnaService;

    @PostMapping("/getQna")
    public Object getQna(@RequestParam("productNum") String productNum) {
        List<QnaDto> qnaList = qnaService.getQna(productNum);
        return qnaList;
    }

    @GetMapping("/getReadyToAnswer")
    public Object getReadyToAnswer(@RequestParam("sellerId") String sellerId) {
        return qnaService.getReadyToAnswer(sellerId);
    }

    @PostMapping("/writeQna")
    public void writeQna(@RequestBody QnaDto qnaDto, HttpServletResponse httpServletResponse) throws IOException {
//        System.out.println(pathname);
        qnaService.writeQna(qnaDto);
//        httpServletResponse.sendRedirect(serverUrl + pathname);
    }

    @PostMapping("/answerWrite")
    public void answerWrite(@RequestBody QnaDto qnaDto, HttpServletResponse httpServletResponse)throws IOException{
        qnaService.answerWrite(qnaDto);
//        httpServletResponse.sendRedirect(serverUrl + "/qnaAnswerWrite");
    }

    @GetMapping("/getMyQna")
    public List<QnaDto> getMyQna(@RequestParam("userId") String userId) {
        return qnaService.getMyQna(userId);
    }
}
