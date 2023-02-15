package com.fproject.project_team3.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
////        addMapping() : 지정한 패턴에 맞는 페이지에 대해서 접근 권한 확인
////        allowedOrigins(url) : 접근 허용할 외부 url
//        registry.addMapping("/**")
//                .allowedOrigins("http://localhost:3000");
//    }
//
//    // 파일 업로드
//    @Bean
//    public CommonsMultipartResolver multipartResolver() {
//        CommonsMultipartResolver commonsMultipartResolver = new CommonsMultipartResolver();
//
////        기본 문자셋 설정
//        commonsMultipartResolver.setDefaultEncoding("UTF-8");
////        업로드 파일 최대 크기 설정, byte 크기로 설정하기 때문에 5 * 1024 * 1024 = 5MB
//        commonsMultipartResolver.setMaxUploadSizePerFile(5 * 1024 * 1024);
//
//        return commonsMultipartResolver;
//    }
}
