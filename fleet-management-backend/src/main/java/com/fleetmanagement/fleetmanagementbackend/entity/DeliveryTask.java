package com.fleetmanagement.fleetmanagementbackend.entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "delivery_tasks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DeliveryTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String locationName;

    private Double latitude;

    private Double longitude;

    private Integer stopOrder;
}

