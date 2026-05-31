package com.fleetmanagement.fleetmanagementbackend.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class FuelRecordDTO {

    @NotNull(message = "Fuel Date is required")
    private LocalDate fuelDate;

    @NotNull(message = "Fuel Quantity is required")
    private Double fuelQuantity;

    @NotNull(message = "Cost is required")
    private Double cost;

    @NotNull(message = "Vehicle ID is required")
    private Long vehicleId;
}