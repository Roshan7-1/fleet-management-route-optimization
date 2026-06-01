package com.fleetmanagement.fleetmanagementbackend.controller;

import com.fleetmanagement.fleetmanagementbackend.entity.MaintenanceRecord;
import com.fleetmanagement.fleetmanagementbackend.service.MaintenanceRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maintenance")
@RequiredArgsConstructor
public class MaintenanceRecordController {

    private final MaintenanceRecordService maintenanceRecordService;

    @PostMapping
    public MaintenanceRecord createMaintenanceRecord(
            @RequestBody MaintenanceRecord maintenanceRecord) {

        return maintenanceRecordService
                .saveMaintenanceRecord(maintenanceRecord);
    }

    @GetMapping
    public List<MaintenanceRecord> getAllMaintenanceRecords() {
        return maintenanceRecordService.getAllMaintenanceRecords();
    }

    @GetMapping("/{id}")
    public MaintenanceRecord getMaintenanceRecordById(
            @PathVariable Long id) {

        return maintenanceRecordService
                .getMaintenanceRecordById(id);
    }

    @PutMapping("/{id}")
    public MaintenanceRecord updateMaintenanceRecord(
            @PathVariable Long id,
            @RequestBody MaintenanceRecord maintenanceRecord) {

        return maintenanceRecordService
                .updateMaintenanceRecord(id, maintenanceRecord);
    }

    @DeleteMapping("/{id}")
    public String deleteMaintenanceRecord(
            @PathVariable Long id) {

        maintenanceRecordService.deleteMaintenanceRecord(id);
        return "Maintenance record deleted successfully";
    }
}