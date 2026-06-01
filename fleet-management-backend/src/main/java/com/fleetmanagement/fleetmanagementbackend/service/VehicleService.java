package com.fleetmanagement.fleetmanagementbackend.service;

import com.fleetmanagement.fleetmanagementbackend.dto.VehicleDTO;
import com.fleetmanagement.fleetmanagementbackend.entity.Driver;
import com.fleetmanagement.fleetmanagementbackend.entity.Vehicle;
import com.fleetmanagement.fleetmanagementbackend.repository.DriverRepository;
import com.fleetmanagement.fleetmanagementbackend.repository.VehicleRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VehicleService {

    private final VehicleRepository vehicleRepository;
    private final DriverRepository driverRepository;

    public Vehicle saveVehicle(VehicleDTO vehicleDTO) {

        Vehicle vehicle = new Vehicle();

        vehicle.setVehicleNumber(vehicleDTO.getVehicleNumber());
        vehicle.setCapacity(vehicleDTO.getCapacity());
        vehicle.setMaintenanceStatus(vehicleDTO.getMaintenanceStatus());

        return vehicleRepository.save(vehicle);
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle getVehicleById(Long id) {
        return vehicleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));
    }

    public Vehicle updateVehicle(Long id, VehicleDTO vehicleDTO) {

        Vehicle vehicle = getVehicleById(id);

        vehicle.setVehicleNumber(vehicleDTO.getVehicleNumber());
        vehicle.setCapacity(vehicleDTO.getCapacity());
        vehicle.setMaintenanceStatus(vehicleDTO.getMaintenanceStatus());

        return vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    public Vehicle assignDriver(Long vehicleId, Long driverId) {

        Vehicle vehicle = getVehicleById(vehicleId);

        Driver driver = driverRepository.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));

        vehicle.setAssignedDriver(driver);

        return vehicleRepository.save(vehicle);
    }
}