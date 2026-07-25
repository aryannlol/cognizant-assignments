package com.cognizant.JWT_handson.controller;

import com.cognizant.JWT_handson.model.AuthenticationRequest;
import com.cognizant.JWT_handson.util.JwtUtil;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    @PostMapping("/authenticate")
    public String authenticate(@RequestBody AuthenticationRequest request) {

        return JwtUtil.generateToken(request.getUsername());

    }
}