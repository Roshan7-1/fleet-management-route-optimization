package com.fleetmanagement.fleetmanagementbackend.service;

import com.fleetmanagement.fleetmanagementbackend.entity.MaintenanceRecord;
import com.fleetmanagement.fleetmanagementbackend.repository.MaintenanceRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MaintenanceRecordService {

    private final MaintenanceRecordRepository maintenanceRecordRepository;

    public MaintenanceRecord saveMaintenanceRecord(
            MaintenanceRecord maintenanceRecord) {
        return maintenanceRecordRepository.save(maintenanceRecord);
    }

    public List<MaintenanceRecord> getAllMaintenanceRecords() {
        return maintenanceRecordRepository.findAll();
    }

    public MaintenanceRecord getMaintenanceRecordById(Long id) {
        return maintenanceRecordRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Maintenance record not found"));
    }

    public MaintenanceRecord updateMaintenanceRecord(
            Long id,
            MaintenanceRecord maintenanceDetails) {

        MaintenanceRecord maintenance =
                getMaintenanceRecordById(id);

        maintenance.setServiceDate(
                maintenanceDetails.getServiceDate());

        maintenance.setDescription(
                maintenanceDetails.getDescription());

        maintenance.setCost(
                maintenanceDetails.getCost());

        maintenance.setVehicle(
                maintenanceDetails.getVehicle());

        return maintenanceRecordRepository.save(maintenance);
    }

    public void deleteMaintenanceRecord(Long id) {
        maintenanceRecordRepository.deleteById(id);
    }
}