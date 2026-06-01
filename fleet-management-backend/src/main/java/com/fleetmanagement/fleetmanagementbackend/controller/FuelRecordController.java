package com.fleetmanagement.fleetmanagementbackend.controller;

import com.fleetmanagement.fleetmanagementbackend.entity.FuelRecord;
import com.fleetmanagement.fleetmanagementbackend.service.FuelRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fuel-records")
@RequiredArgsConstructor
public class FuelRecordController {

    private final FuelRecordService fuelRecordService;

    @PostMapping
    public FuelRecord createFuelRecord(@RequestBody FuelRecord fuelRecord) {
        return fuelRecordService.createFuelRecord(fuelRecord);
    }

    @GetMapping
    public List<FuelRecord> getAllFuelRecords() {
        return fuelRecordService.getAllFuelRecords();
    }

    @GetMapping("/{id}")
    public FuelRecord getFuelRecordById(@PathVariable Long id) {
        return fuelRecordService.getFuelRecordById(id);
    }

    @PutMapping("/{id}")
    public FuelRecord updateFuelRecord(
            @PathVariable Long id,
            @RequestBody FuelRecord fuelRecord) {

        return fuelRecordService.updateFuelRecord(id, fuelRecord);
    }

    @DeleteMapping("/{id}")
    public String deleteFuelRecord(@PathVariable Long id) {
        fuelRecordService.deleteFuelRecord(id);
        return "Fuel Record deleted successfully";
    }
}