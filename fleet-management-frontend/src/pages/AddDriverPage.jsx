import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/ApiService";

function AddDriverPage() {
  const navigate = useNavigate();

  const [driver, setDriver] = useState({
    name: "",
    licenseNumber: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setDriver({
      ...driver,
      [e.target.name]: e.target.value,
    });
  };

  const saveDriver = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/drivers", driver);

      alert("✅ Driver Added Successfully");
      navigate("/drivers");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to Add Driver");
    }
  };

  return (
    <div className="container mt-4">

      <div className="page-header mb-4">
        <h1 className="page-title">👨‍✈️ Add New Driver</h1>
        <p className="text-muted">
          Register a new driver in the fleet management system.
        </p>
      </div>

      <div className="form-container">

        <form onSubmit={saveDriver}>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Driver Name
            </label>
            <input
              type="text"
              name="name"
              value={driver.name}
              placeholder="Enter Driver Name"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              License Number
            </label>
            <input
              type="text"
              name="licenseNumber"
              value={driver.licenseNumber}
              placeholder="MH123456789"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={driver.phoneNumber}
              placeholder="9876543210"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex gap-2">
            <button
              type="submit"
              className="btn btn-success px-4"
            >
              Save Driver
            </button>

            <button
              type="button"
              className="btn btn-secondary px-4"
              onClick={() => navigate("/drivers")}
            >
              Cancel
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default AddDriverPage;