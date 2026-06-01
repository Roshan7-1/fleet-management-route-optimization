import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/ApiService";

function EditTripPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);

  const [trip, setTrip] = useState({
    source: "",
    destination: "",
    distance: "",
    status: "",
    vehicleId: "",
    driverId: ""
  });

  useEffect(() => {
    fetchTrip();
    fetchVehicles();
    fetchDrivers();
  }, []);

  const fetchTrip = async () => {
    try {
      const response = await api.get(`/api/trips/${id}`);

      setTrip({
        source: response.data.source,
        destination: response.data.destination,
        distance: response.data.distance,
        status: response.data.status,
        vehicleId: response.data.vehicle?.id || "",
        driverId: response.data.driver?.id || ""
      });

    } catch (error) {
      console.error(error);
    }
  };

  const fetchVehicles = async () => {
    const response = await api.get("/api/vehicles");
    setVehicles(response.data);
  };

  const fetchDrivers = async () => {
    const response = await api.get("/api/drivers");
    setDrivers(response.data);
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
      status: trip.status,
      vehicle: {
        id: Number(trip.vehicleId)
      },
      driver: {
        id: Number(trip.driverId)
      }
    };

    try {
      await api.put(`/api/trips/${id}`, tripData);
      navigate("/trips");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Trip</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Source</label>
          <input
            type="text"
            name="source"
            className="form-control"
            value={trip.source}
            onChange={handleChange}
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
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-select"
            value={trip.status}
            onChange={handleChange}
          >
            <option value="PLANNED">PLANNED</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Vehicle</label>
          <select
            name="vehicleId"
            className="form-select"
            value={trip.vehicleId}
            onChange={handleChange}
          >
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
          >
            {drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Update Trip
        </button>

      </form>
    </div>
  );
}

export default EditTripPage;