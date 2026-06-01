package com.fleetmanagement.fleetmanagementbackend.repository;

import com.fleetmanagement.fleetmanagementbackend.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}