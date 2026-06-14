package com.fleetmanagement.fleetmanagementbackend.repository;

import com.fleetmanagement.fleetmanagementbackend.entity.DeliveryTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryTaskRepository
        extends JpaRepository<DeliveryTask, Long> {
}