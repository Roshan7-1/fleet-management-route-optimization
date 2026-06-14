package com.fleetmanagement.fleetmanagementbackend.repository;

import com.fleetmanagement.fleetmanagementbackend.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
}