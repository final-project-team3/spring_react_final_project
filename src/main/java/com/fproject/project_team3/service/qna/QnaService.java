package com.fproject.project_team3.service.qna;

import com.fproject.project_team3.dto.userAndseller.QnaDto;

import java.util.List;

public interface QnaService {
    List<QnaDto> getQna(String productNum);
}
