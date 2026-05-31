package com.fleetmanagement.fleetmanagementbackend.controller;

import com.fleetmanagement.fleetmanagementbackend.dto.LoginRequest;
import com.fleetmanagement.fleetmanagementbackend.dto.RegisterRequest;
import com.fleetmanagement.fleetmanagementbackend.entity.User;
import com.fleetmanagement.fleetmanagementbackend.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {

        User user = User.builder()
                .username(request.getUsername())
                .password(request.getPassword())
                .build();

        return userService.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        return userService.login(
                request.getUsername(),
                request.getPassword()
        );
    }
}