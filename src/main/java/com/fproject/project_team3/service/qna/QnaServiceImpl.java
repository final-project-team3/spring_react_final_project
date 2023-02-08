package com.fproject.project_team3.service.qna;

import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.userAndseller.QnaDto;
import com.fproject.project_team3.mapper.QnaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class QnaServiceImpl implements QnaService{
    @Autowired
    private QnaMapper qnaMapper;

    @Override
    public List<QnaDto> getQna(String productNum){ return qnaMapper.getQna(productNum);}

    @Override
    public void writeQna(QnaDto qnaDto) {
        qnaMapper.writeQna(qnaDto);
    }

    @Override
    public Object getReadyToAnswer(String sellerId) {
        Map<String, Object> productInfoQnaInfo = new HashMap<>();
        List<ProductInfoDto> productInfoList= qnaMapper.getReadyToAnswer(sellerId);
        List<QnaDto> qnaDtoList = qnaMapper.getSellerQnaList(productInfoList);
        productInfoQnaInfo.put("productInfoList", productInfoList);
        productInfoQnaInfo.put("qnaDtoList", qnaDtoList);
        return productInfoQnaInfo;
    }

    @Override
    public void answerWrite(QnaDto qnaDto) {
        qnaMapper.answerWrite(qnaDto);
    }
}
