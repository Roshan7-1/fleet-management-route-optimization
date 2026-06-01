import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/ApiService";

function AddMaintenancePage() {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);

  const [record, setRecord] = useState({
    serviceDate: "",
    description: "",
    cost: "",
    vehicleId: ""
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await api.get("/api/vehicles");
      setVehicles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setRecord({
      ...record,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      serviceDate: record.serviceDate,
      description: record.description,
      cost: Number(record.cost),
      vehicle: {
        id: Number(record.vehicleId)
      }
    };

    try {
      await api.post("/api/maintenance", payload);
      navigate("/maintenance");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Maintenance Record</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Service Date</label>
          <input
            type="date"
            name="serviceDate"
            className="form-control"
            value={record.serviceDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={record.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Cost</label>
          <input
            type="number"
            name="cost"
            className="form-control"
            value={record.cost}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Vehicle</label>
          <select
            name="vehicleId"
            className="form-select"
            value={record.vehicleId}
            onChange={handleChange}
            required
          >
            <option value="">Select Vehicle</option>

            {vehicles.map((vehicle) => (
              <option
                key={vehicle.id}
                value={vehicle.id}
              >
                {vehicle.vehicleNumber}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-success"
        >
          Save Maintenance Record
        </button>

      </form>
    </div>
  );
}

export default AddMaintenancePage;