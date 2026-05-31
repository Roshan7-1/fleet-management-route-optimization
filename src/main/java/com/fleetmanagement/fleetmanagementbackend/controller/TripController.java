package com.fleetmanagement.fleetmanagementbackend.controller;

import com.fleetmanagement.fleetmanagementbackend.dto.TripDTO;
import com.fleetmanagement.fleetmanagementbackend.entity.Trip;
import com.fleetmanagement.fleetmanagementbackend.service.TripService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
@RequiredArgsConstructor
public class TripController {

    private final TripService tripService;
@PostMapping
public Trip createTrip(@RequestBody Trip trip) {
    return tripService.createTrip(trip);
}

    @GetMapping
    public List<Trip> getAllTrips() {
        return tripService.getAllTrips();
    }

    @GetMapping("/{id}")
    public Trip getTripById(@PathVariable Long id) {
        return tripService.getTripById(id);
    }

    @PutMapping("/{id}")
    public Trip updateTrip(
            @PathVariable Long id,
            @RequestBody Trip trip) {

        return tripService.updateTrip(id, trip);
    }

    @DeleteMapping("/{id}")
    public String deleteTrip(@PathVariable Long id) {
        tripService.deleteTrip(id);
        return "Trip deleted successfully";
    }
}