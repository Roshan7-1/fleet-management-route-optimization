import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/ApiService";

function EditMaintenancePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);

  const [record, setRecord] = useState({
    serviceDate: "",
    description: "",
    cost: "",
    vehicleId: ""
  });

  useEffect(() => {
    fetchRecord();
    fetchVehicles();
  }, []);

  const fetchRecord = async () => {
    const response = await api.get(`/api/maintenance/${id}`);

    setRecord({
      serviceDate: response.data.serviceDate,
      description: response.data.description,
      cost: response.data.cost,
      vehicleId: response.data.vehicle?.id || ""
    });
  };

  const fetchVehicles = async () => {
    const response = await api.get("/api/vehicles");
    setVehicles(response.data);
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
      await api.put(
        `/api/maintenance/${id}`,
        payload
      );

      navigate("/maintenance");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Maintenance Record</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Service Date</label>
          <input
            type="date"
            name="serviceDate"
            className="form-control"
            value={record.serviceDate}
            onChange={handleChange}
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
          />
        </div>

        <div className="mb-3">
          <label>Vehicle</label>
          <select
            name="vehicleId"
            className="form-select"
            value={record.vehicleId}
            onChange={handleChange}
          >
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
          className="btn btn-primary"
        >
          Update Maintenance Record
        </button>

      </form>
    </div>
  );
}

export default EditMaintenancePage;