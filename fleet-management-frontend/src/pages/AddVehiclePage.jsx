import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/ApiService";

function AddVehiclePage() {
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState({
    vehicleNumber: "",
    capacity: "",
    maintenanceStatus: "",
  });

  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/vehicles", {
        vehicleNumber: vehicle.vehicleNumber,
        capacity: Number(vehicle.capacity),
        maintenanceStatus: vehicle.maintenanceStatus,
      });

      alert("✅ Vehicle Added Successfully");
      navigate("/vehicles");
    } catch (error) {
      console.error(error);
      alert("❌ Failed To Add Vehicle");
    }
  };

  return (
    <div className="container mt-4">

      <div className="page-header mb-4">
        <h1 className="page-title">
          🚚 Add New Vehicle
        </h1>
        <p className="text-muted">
          Register a vehicle in the fleet management system.
        </p>
      </div>

      <div className="form-container">

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Vehicle Number
            </label>

            <input
              type="text"
              name="vehicleNumber"
              className="form-control"
              placeholder="MH12AB1234"
              value={vehicle.vehicleNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Capacity (KG)
            </label>

            <input
              type="number"
              name="capacity"
              className="form-control"
              placeholder="5000"
              value={vehicle.capacity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Maintenance Status
            </label>

            <select
              name="maintenanceStatus"
              className="form-select"
              value={vehicle.maintenanceStatus}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Status
              </option>

              <option value="GOOD">
                GOOD
              </option>

              <option value="ACTIVE">
                ACTIVE
              </option>

              <option value="UNDER_MAINTENANCE">
                UNDER MAINTENANCE
              </option>
            </select>
          </div>

          <div className="d-flex gap-2">

            <button
              type="submit"
              className="btn btn-success px-4"
            >
              Save Vehicle
            </button>

            <button
              type="button"
              className="btn btn-secondary px-4"
              onClick={() => navigate("/vehicles")}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddVehiclePage;