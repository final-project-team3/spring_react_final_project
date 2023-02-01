package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.dto.userAndseller.ReviewDto;
import com.fproject.project_team3.service.review.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
public class ReviewRestController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/getReview")
    public Object getReview(@RequestParam("productNum") String productNum) {
        List<ReviewDto> reviewList = reviewService.getReview(productNum);
        return reviewList;
    }
    @PostMapping("/getMyReview")
    public Object getMyReview(@RequestParam("userId") String userId) {
        List<ReviewDto> reviewList = reviewService.getMyReview(userId);
        return reviewList;
    }
    @PostMapping("/deleteMyReview")
    public void deleteMyReview(ReviewDto reviewDto, HttpServletResponse httpServletResponse)throws IOException{
        reviewService.deleteMyReview(reviewDto);
        httpServletResponse.sendRedirect("http://localhost:3000/myReview");
    }



}

