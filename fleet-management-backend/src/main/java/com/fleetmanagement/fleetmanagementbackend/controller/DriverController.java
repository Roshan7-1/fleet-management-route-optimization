package com.fleetmanagement.fleetmanagementbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.fleetmanagement.fleetmanagementbackend.dto.DriverDTO;
import com.fleetmanagement.fleetmanagementbackend.entity.Driver;
import com.fleetmanagement.fleetmanagementbackend.service.DriverService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/drivers")
@RequiredArgsConstructor
public class DriverController {

    private final DriverService driverService;

   @PostMapping
public Driver createDriver(@RequestBody Driver driver) {
    return driverService.saveDriver(driver);
}
    @GetMapping
    public List<Driver> getAllDrivers() {
        return driverService.getAllDrivers();
    }

    @GetMapping("/{id}")
    public Driver getDriverById(@PathVariable Long id) {
        return driverService.getDriverById(id);
    }

   @PutMapping("/{id}")
public Driver updateDriver(
        @PathVariable Long id,
        @RequestBody Driver driver) {

    return driverService.updateDriver(id, driver);
}
    @DeleteMapping("/{id}")
    public String deleteDriver(@PathVariable Long id) {
        driverService.deleteDriver(id);
        return "Driver deleted successfully";
    }
}