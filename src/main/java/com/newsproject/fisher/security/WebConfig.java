package com.newsproject.fisher.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
            .addMapping("/**")
            .allowedOrigins("http://127.0.0.1:8318") // Add your frontend origin here
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Add allowed methods
            .allowedHeaders("*") // Add allowed headers
            .exposedHeaders("Access-Control-Allow-Origin") // Expose the Access-Control-Allow-Origin header
            .allowCredentials(true) // Allow credentials if you're using them
            .maxAge(3600); // Cache preflight response for 3600 seconds (1 hour)
    }
}
