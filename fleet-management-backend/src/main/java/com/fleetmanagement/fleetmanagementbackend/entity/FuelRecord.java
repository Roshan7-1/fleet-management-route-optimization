package com.fleetmanagement.fleetmanagementbackend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "fuel_records")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FuelRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate fuelDate;

    private Double fuelQuantity;

    private Double cost;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;
}