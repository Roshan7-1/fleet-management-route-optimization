package com.fleetmanagement.fleetmanagementbackend.service;

import com.fleetmanagement.fleetmanagementbackend.entity.Trip;
import com.fleetmanagement.fleetmanagementbackend.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TripService {

    private final TripRepository tripRepository;

    public Trip createTrip(Trip trip) {
        return tripRepository.save(trip);
    }

    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }

    public Trip getTripById(Long id) {
        return tripRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Trip not found"));
    }

    public Trip updateTrip(Long id, Trip tripDetails) {

        Trip trip = getTripById(id);

        trip.setSource(tripDetails.getSource());
        trip.setDestination(tripDetails.getDestination());
        trip.setDistance(tripDetails.getDistance());
        trip.setStatus(tripDetails.getStatus());
        trip.setVehicle(tripDetails.getVehicle());
        trip.setDriver(tripDetails.getDriver());

        return tripRepository.save(trip);
    }

    public void deleteTrip(Long id) {
        tripRepository.deleteById(id);
    }
}