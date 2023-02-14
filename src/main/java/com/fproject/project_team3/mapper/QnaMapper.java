package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.product.ProductInfoDto;
import com.fproject.project_team3.dto.userAndseller.QnaDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface QnaMapper {
    List<QnaDto> getQna(String productNum);

    void writeQna(QnaDto qnaDto);

    List<ProductInfoDto> getReadyToAnswer(String sellerId);

    List<QnaDto> getSellerQnaList(List<ProductInfoDto> productInfoList);

    void answerWrite(QnaDto qnaDto);

    List<QnaDto> getMyQna(String userId);
}
