package com.fleetmanagement.fleetmanagementbackend.repository;

import com.fleetmanagement.fleetmanagementbackend.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {
}