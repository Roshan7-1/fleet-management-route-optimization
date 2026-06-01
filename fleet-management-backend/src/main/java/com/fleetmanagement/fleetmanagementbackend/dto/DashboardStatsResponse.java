package com.fleetmanagement.fleetmanagementbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DashboardStatsResponse {

    private long vehicleCount;
    private long driverCount;
    private long tripCount;
    private long fuelRecordCount;
}