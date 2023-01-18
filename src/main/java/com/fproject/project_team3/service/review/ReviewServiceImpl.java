package com.fproject.project_team3.service.review;

import com.fproject.project_team3.dto.userAndseller.ReviewDto;
import com.fproject.project_team3.mapper.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewMapper reviewMapper;

    //    HSH

    //    HSH

    //    LYS
//    리뷰 리스트 가져옴
    @Override
    public List<ReviewDto> getReview(String productNum) {
        return reviewMapper.getReview(productNum);
    }
    //    LYS

    //    GJY

    //    GJY

    //    BJH

    //    BJH

    //    LSH

    //    LSH
}
