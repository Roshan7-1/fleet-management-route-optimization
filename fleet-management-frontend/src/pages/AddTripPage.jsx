import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/ApiService";

function AddTripPage() {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);

  const [trip, setTrip] = useState({
  source: "",
  destination: "",
  distance: "",
  vehicleId: "",
  driverId: ""
});
  useEffect(() => {
    fetchVehicles();
    fetchDrivers();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await api.get("/api/vehicles");
      setVehicles(response.data);
    } catch (error) {
      console.error("Error fetching vehicles", error);
    }
  };

  const fetchDrivers = async () => {
    try {
      const response = await api.get("/api/drivers");
      setDrivers(response.data);
    } catch (error) {
      console.error("Error fetching drivers", error);
    }
  };

  const handleChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

const tripData = {
  source: trip.source,
  destination: trip.destination,
  distance: Number(trip.distance),
  vehicle: {
    id: Number(trip.vehicleId)
  },
  driver: {
    id: Number(trip.driverId)
  }
};

    try {
      await api.post("/api/trips", tripData);
      navigate("/trips");
    } catch (error) {
      console.error("Error creating trip", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Trip</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Source</label>
          <input
            type="text"
            name="source"
            className="form-control"
            value={trip.source}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Destination</label>
          <input
            type="text"
            name="destination"
            className="form-control"
            value={trip.destination}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Distance</label>
          <input
            type="number"
            name="distance"
            className="form-control"
            value={trip.distance}
            onChange={handleChange}
            required
          />
        </div>

        {/* <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-select"
            value={trip.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="PLANNED">PLANNED</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div> */}

        <div className="mb-3">
          <label className="form-label">Vehicle</label>
          <select
            name="vehicleId"
            className="form-select"
            value={trip.vehicleId}
            onChange={handleChange}
            required
          >
            <option value="">Select Vehicle</option>

            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.vehicleNumber}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Driver</label>
          <select
            name="driverId"
            className="form-select"
            value={trip.driverId}
            onChange={handleChange}
            required
          >
            <option value="">Select Driver</option>

            {drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Save Trip
        </button>

      </form>
    </div>
  );
}

export default AddTripPage;