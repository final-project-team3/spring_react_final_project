package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.userAndseller.QnaDto;
import com.fproject.project_team3.service.qna.QnaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QnaController {
    @Autowired
    private QnaService qnaService;

    @PostMapping("/getQna")
    public Object getQna(@RequestParam("productNum") String productNum) {
        List<QnaDto> qnaList = qnaService.getQna(productNum);
        return qnaList;
    }
}
