package com.fleetmanagement.fleetmanagementbackend.repository;

import com.fleetmanagement.fleetmanagementbackend.entity.FuelRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuelRecordRepository extends JpaRepository<FuelRecord, Long> {
}