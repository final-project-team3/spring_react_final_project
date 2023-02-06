package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.userAndseller.QnaDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface QnaMapper {
    List<QnaDto> getQna(String productNum);
}
