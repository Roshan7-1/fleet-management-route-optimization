package com.fleetmanagement.fleetmanagementbackend.service;

import com.fleetmanagement.fleetmanagementbackend.repository.DriverRepository;
import com.fleetmanagement.fleetmanagementbackend.repository.VehicleRepository;
import com.fleetmanagement.fleetmanagementbackend.repository.TripRepository;
import com.fleetmanagement.fleetmanagementbackend.repository.FuelRecordRepository;
import com.fleetmanagement.fleetmanagementbackend.repository.MaintenanceRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final DriverRepository driverRepository;
    private final VehicleRepository vehicleRepository;
    private final TripRepository tripRepository;
    private final FuelRecordRepository fuelRecordRepository;
    private final MaintenanceRecordRepository maintenanceRecordRepository;

    public Map<String, Long> getDashboardStats() {

        Map<String, Long> stats = new HashMap<>();

        stats.put("totalDrivers", driverRepository.count());
        stats.put("totalVehicles", vehicleRepository.count());
        stats.put("totalTrips", tripRepository.count());
        stats.put("totalFuelRecords", fuelRecordRepository.count());
        stats.put("totalMaintenanceRecords",
                maintenanceRecordRepository.count());

        return stats;
    }
}