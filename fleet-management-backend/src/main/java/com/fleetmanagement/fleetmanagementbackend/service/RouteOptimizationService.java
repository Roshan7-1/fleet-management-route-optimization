package com.fleetmanagement.fleetmanagementbackend.service;

import com.fleetmanagement.fleetmanagementbackend.entity.DeliveryTask;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RouteOptimizationService {

    public List<DeliveryTask> optimizeRoute(List<DeliveryTask> tasks) {

        if (tasks == null || tasks.isEmpty()) {
            return new ArrayList<>();
        }

        List<DeliveryTask> optimized = new ArrayList<>();
        List<DeliveryTask> remaining = new ArrayList<>(tasks);

        DeliveryTask current = remaining.remove(0);
        optimized.add(current);

        while (!remaining.isEmpty()) {

            DeliveryTask nearest = null;
            double shortestDistance = Double.MAX_VALUE;

            for (DeliveryTask task : remaining) {

                double distance = calculateDistance(
                        current.getLatitude(),
                        current.getLongitude(),
                        task.getLatitude(),
                        task.getLongitude()
                );

                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    nearest = task;
                }
            }

            optimized.add(nearest);
            remaining.remove(nearest);
            current = nearest;
        }

        for (int i = 0; i < optimized.size(); i++) {
            optimized.get(i).setStopOrder(i + 1);
        }

        return optimized;
    }

    private double calculateDistance(
            double lat1,
            double lon1,
            double lat2,
            double lon2) {

        double dx = lat1 - lat2;
        double dy = lon1 - lon2;

        return Math.sqrt(dx * dx + dy * dy);
    }
}