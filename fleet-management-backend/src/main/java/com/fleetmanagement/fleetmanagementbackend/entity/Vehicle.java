package com.fleetmanagement.fleetmanagementbackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vehicles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String vehicleNumber;

    private Double capacity;

    private String maintenanceStatus;

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Driver assignedDriver;
}