package com.fproject.project_team3.controller;

import com.fproject.project_team3.service.email.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/emailConfirm")
    public String emailConfirm(@RequestParam("email") String email) throws Exception {
//        System.out.println(email);
        String confirm = emailService.sendSimpleMessage(email);
//        System.out.println(confirm);
        return confirm;
    }

}
