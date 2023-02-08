package com.fproject.project_team3.controller;

import com.fproject.project_team3.dto.user.UserInfoDto;
import com.fproject.project_team3.dto.userAndseller.QnaDto;
import com.fproject.project_team3.dto.userAndseller.ReviewDto;
import com.fproject.project_team3.service.review.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    public void deleteMyReview(ReviewDto reviewDto, HttpServletResponse httpServletResponse) throws IOException {
        System.out.println(reviewDto);
        reviewService.deleteMyReview(reviewDto);
        httpServletResponse.sendRedirect("http://localhost:3000/myReview");
    }

    @PostMapping("/updateMyReview")
    public void updateMyReview(ReviewDto reviewDto, HttpServletResponse httpServletResponse) throws IOException {
        System.out.println(reviewDto);
        reviewService.updateMyReview(reviewDto);
        httpServletResponse.sendRedirect("http://localhost:3000/myReview");
    }

    @PostMapping("/writeMyReview")
    public void writeMyReview(ReviewDto reviewDto, HttpServletResponse httpServletResponse) throws IOException {
        reviewService.writeMyReview(reviewDto);
        httpServletResponse.sendRedirect("http://localhost:3000/myReview");
    }

    @GetMapping("/reviewWriteCheck")
    public int reviewWriteCheck(@RequestParam("orderNum") int orderNum) {
        return reviewService.reviewWriteCheck(orderNum);
    }
}

