package com.fleetmanagement.fleetmanagementbackend.service;

import com.fleetmanagement.fleetmanagementbackend.entity.FuelRecord;
import com.fleetmanagement.fleetmanagementbackend.repository.FuelRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FuelRecordService {

    private final FuelRecordRepository fuelRecordRepository;

    public FuelRecord createFuelRecord(FuelRecord fuelRecord) {
        return fuelRecordRepository.save(fuelRecord);
    }

    public List<FuelRecord> getAllFuelRecords() {
        return fuelRecordRepository.findAll();
    }

    public FuelRecord getFuelRecordById(Long id) {
        return fuelRecordRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Fuel Record not found"));
    }

    public FuelRecord updateFuelRecord(Long id, FuelRecord fuelRecordDetails) {

        FuelRecord fuelRecord = getFuelRecordById(id);

        fuelRecord.setFuelDate(fuelRecordDetails.getFuelDate());
        fuelRecord.setFuelQuantity(fuelRecordDetails.getFuelQuantity());
        fuelRecord.setCost(fuelRecordDetails.getCost());
        fuelRecord.setVehicle(fuelRecordDetails.getVehicle());

        return fuelRecordRepository.save(fuelRecord);
    }

    public void deleteFuelRecord(Long id) {
        fuelRecordRepository.deleteById(id);
    }
}