package com.fproject.project_team3.service.review;

import com.fproject.project_team3.dto.userAndseller.ReviewDto;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface ReviewService {

    //    HSH

    //    HSH

    //    LYS
//     리뷰 리스트 가져옴
    List<ReviewDto> getReview(String productNum);

    List<ReviewDto> getMyReview(String userId);

    void deleteMyReview(ReviewDto reviewDto);

    void updateMyReview(ReviewDto reviewDto);

    void writeMyReview(ReviewDto reviewDto);

    int reviewWriteCheck(int orderNum);

    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
