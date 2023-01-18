package com.fproject.project_team3.dto.userAndseller;

import lombok.Data;

@Data
public class ReviewDto {
    int reviewNum;
    String userId;
    int productNum;
    String reviewContent;
    String reviewRegistrationDate;
    int reviewHelpful;
    int reviewStarPoint;
}
