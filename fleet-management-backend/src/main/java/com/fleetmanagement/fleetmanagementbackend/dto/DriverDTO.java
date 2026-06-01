package com.fleetmanagement.fleetmanagementbackend.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class DriverDTO {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "License Number is required")
    private String licenseNumber;

    @NotNull(message = "License Expiry is required")
    private LocalDate licenseExpiry;

    @NotNull(message = "Shift Hours is required")
    private Integer shiftHours;

    @NotBlank(message = "Status is required")
    private String status;
}