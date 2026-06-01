package com.fleetmanagement.fleetmanagementbackend.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class VehicleDTO {

    @NotBlank(message = "Vehicle Number is required")
    private String vehicleNumber;

    @NotNull(message = "Capacity is required")
    private Double capacity;

    @NotBlank(message = "Maintenance Status is required")
    private String maintenanceStatus;
}