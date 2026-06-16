package com.fleetmanagement.fleetmanagementbackend.controller;

import com.fleetmanagement.fleetmanagementbackend.entity.DeliveryTask;
import com.fleetmanagement.fleetmanagementbackend.repository.DeliveryTaskRepository;
import com.fleetmanagement.fleetmanagementbackend.service.RouteOptimizationService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/routes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RouteController {

    private final RouteOptimizationService routeOptimizationService;
    private final DeliveryTaskRepository deliveryTaskRepository;

    @PostMapping("/optimize")
    public List<DeliveryTask> optimizeRoute(
            @RequestBody List<DeliveryTask> tasks) {

        List<DeliveryTask> optimizedTasks =
                routeOptimizationService.optimizeRoute(tasks);

        return deliveryTaskRepository.saveAll(optimizedTasks);
    }
}