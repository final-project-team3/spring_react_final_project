package com.fproject.project_team3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class emailController {
    @Autowired
    private com.fproject.project_team3.service.email.emailService emailService;

    @PostMapping("/emailConfirm")
    public String emailConfirm(@RequestParam("email") String email) throws Exception {
//        System.out.println(email);
        String confirm = emailService.sendSimpleMessage(email);
//        System.out.println(confirm);
        return confirm;
    }

}
