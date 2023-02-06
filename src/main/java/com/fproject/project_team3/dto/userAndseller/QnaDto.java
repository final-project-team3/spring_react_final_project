package com.fproject.project_team3.dto.userAndseller;

import lombok.Data;

@Data
public class QnaDto {
    int qnaNum;
    int productNum;
    String userId;
    String qnaTitle;
    String qnaContent;
    String qnaRegistrationDate;
    String qnaState;
    String qnaAnswer;
    String qnaAnswerRegistrationDate;

}
