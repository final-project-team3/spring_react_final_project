package com.fproject.project_team3.mapper;

import com.fproject.project_team3.dto.userAndseller.ReviewDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReviewMapper {
    List<ReviewDto> getReview(String productNum);

    List<ReviewDto> getMyReview(String userId);

    void deleteMyReview(ReviewDto reviewDto);

    void updateMyReview(ReviewDto reviewDto);

    void writeMyReview(ReviewDto reviewDto);
}
