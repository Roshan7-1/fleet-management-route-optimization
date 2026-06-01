package com.fleetmanagement.fleetmanagementbackend.controller;

import com.fleetmanagement.fleetmanagementbackend.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/stats")
    public Map<String, Long> getDashboardStats() {
        return dashboardService.getDashboardStats();
    }
}