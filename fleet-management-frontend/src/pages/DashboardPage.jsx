import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/ApiService";

function DashboardPage() {
  const [stats, setStats] = useState({
    totalVehicles: 0,
    totalDrivers: 0,
    totalTrips: 0,
    totalFuelRecords: 0,
  });

  useEffect(() => {
    loadDashboardStats();
  }, []);

  const loadDashboardStats = async () => {
    try {
      const response = await api.get("/api/dashboard/stats");

      setStats({
        totalVehicles: response.data.totalVehicles,
        totalDrivers: response.data.totalDrivers,
        totalTrips: response.data.totalTrips,
        totalFuelRecords: response.data.totalFuelRecords,
      });
    } catch (error) {
      console.error("Dashboard Error:", error);
    }
  };

  return (
    <div className="container mt-4">

      {/* Welcome Banner */}
      <div className="welcome-banner mb-4">
        <h2>Welcome Back 👋</h2>
        <p>
          Manage your fleet operations efficiently from one dashboard.
        </p>
      </div>

      {/* Title */}
      <h1 className="page-title">
        Fleet Management Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="row g-4">

        <div className="col-md-3">
          <Link
            to="/vehicles"
            className="text-decoration-none"
          >
            <div className="stats-card vehicles-card">
              <h5>🚚 Vehicles</h5>
              <h2>{stats.totalVehicles}</h2>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link
            to="/drivers"
            className="text-decoration-none"
          >
            <div className="stats-card drivers-card">
              <h5>👨‍✈️ Drivers</h5>
              <h2>{stats.totalDrivers}</h2>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link
            to="/trips"
            className="text-decoration-none"
          >
            <div className="stats-card trips-card">
              <h5>🛣️ Trips</h5>
              <h2>{stats.totalTrips}</h2>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link
            to="/fuel-records"
            className="text-decoration-none"
          >
            <div className="stats-card fuel-card">
              <h5>⛽ Fuel Records</h5>
              <h2>{stats.totalFuelRecords}</h2>
            </div>
          </Link>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="mt-5">
        <h3 className="mb-3">Quick Actions</h3>

        <div className="d-flex flex-wrap gap-3">

          <Link
            to="/drivers/add"
            className="btn btn-primary"
          >
            ➕ Add Driver
          </Link>

          <Link
            to="/vehicles/add"
            className="btn btn-success"
          >
            🚚 Add Vehicle
          </Link>

          <Link
            to="/trips/add"
            className="btn btn-warning"
          >
            🛣️ Add Trip
          </Link>

          <Link
            to="/fuel-records/add"
            className="btn btn-dark"
          >
            ⛽ Add Fuel Record
          </Link>

          <Link
            to="/maintenance/add"
            className="btn btn-danger"
          >
            🔧 Add Maintenance
          </Link>

        </div>
      </div>

      {/* Activity Section */}
      <div className="recent-section mt-5">

        <h3 className="mb-3">
          Recent Activity
        </h3>

        <div className="recent-card">

          <p>🚚 Vehicles Registered: {stats.totalVehicles}</p>

          <p>👨‍✈️ Active Drivers: {stats.totalDrivers}</p>

          <p>🛣️ Trips Created: {stats.totalTrips}</p>

          <p>⛽ Fuel Records Added: {stats.totalFuelRecords}</p>

        </div>

      </div>

    </div>
  );
}

export default DashboardPage;