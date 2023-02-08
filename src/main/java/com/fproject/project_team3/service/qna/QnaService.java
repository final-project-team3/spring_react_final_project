package com.fproject.project_team3.service.qna;

import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.userAndseller.QnaDto;

import java.util.List;

public interface QnaService {
    List<QnaDto> getQna(String productNum);

    void writeQna(QnaDto qnaDto);

    Object getReadyToAnswer(String sellerId);

    void answerWrite(QnaDto qnaDto);
}
