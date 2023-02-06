package com.fproject.project_team3.service.qna;

import com.fproject.project_team3.dto.userAndseller.QnaDto;
import com.fproject.project_team3.mapper.QnaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QnaServiceImpl implements QnaService{
    @Autowired
    private QnaMapper qnaMapper;

    @Override
    public List<QnaDto> getQna(String productNum){ return qnaMapper.getQna(productNum);}
}
