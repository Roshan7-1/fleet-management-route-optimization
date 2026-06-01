import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/ApiService";

function EditVehiclePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState({
    vehicleNumber: "",
    capacity: "",
    maintenanceStatus: "",
  });

  useEffect(() => {
    loadVehicle();
  }, []);

  const loadVehicle = async () => {
    try {
      const response = await api.get(`/api/vehicles/${id}`);

      setVehicle({
        vehicleNumber: response.data.vehicleNumber,
        capacity: response.data.capacity,
        maintenanceStatus: response.data.maintenanceStatus,
      });
    } catch (error) {
      console.error(error);
      alert("Unable to load vehicle");
    }
  };

  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const updateVehicle = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/api/vehicles/${id}`, vehicle);

      alert("Vehicle Updated Successfully");

      navigate("/vehicles");
    } catch (error) {
      console.error(error);
      alert("Failed to update vehicle");
    }
  };

  return (
    <div className="container mt-4">

      <div className="page-header mb-4">
        <h1 className="page-title">
          ✏️ Edit Vehicle
        </h1>
      </div>

      <div className="form-container">

        <form onSubmit={updateVehicle}>

          <div className="mb-3">
            <label className="form-label">
              Vehicle Number
            </label>

            <input
              type="text"
              name="vehicleNumber"
              value={vehicle.vehicleNumber}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Capacity
            </label>

            <input
              type="number"
              name="capacity"
              value={vehicle.capacity}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Maintenance Status
            </label>

            <select
              name="maintenanceStatus"
              value={vehicle.maintenanceStatus}
              onChange={handleChange}
              className="form-select"
            >
              <option value="GOOD">GOOD</option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="MAINTENANCE">
                MAINTENANCE
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary me-2"
          >
            Update Vehicle
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/vehicles")}
          >
            Cancel
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditVehiclePage;