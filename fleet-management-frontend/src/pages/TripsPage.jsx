import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/ApiService";

function TripsPage() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await api.get("/api/trips");
      setTrips(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  const deleteTrip = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trip?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/api/trips/${id}`);
      fetchTrips();
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Trips Management</h2>

        <Link
          to="/trips/add"
          className="btn btn-primary"
        >
          Add Trip
        </Link>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Distance</th>
            <th>Status</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {trips.length > 0 ? (
            trips.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.id}</td>
                <td>{trip.source}</td>
                <td>{trip.destination}</td>
                <td>{trip.distance}</td>
                <td>{trip.status}</td>

                <td>
                  {trip.vehicle
                    ? trip.vehicle.vehicleNumber
                    : "N/A"}
                </td>

                <td>
                  {trip.driver
                    ? trip.driver.name
                    : "N/A"}
                </td>

                <td>
                  <Link
                    to={`/trips/edit/${trip.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTrip(trip.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No Trips Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}

export default TripsPage;