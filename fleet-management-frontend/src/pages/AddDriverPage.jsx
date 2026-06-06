import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/ApiService";

function AddDriverPage() {
  const navigate = useNavigate();

  const [driver, setDriver] = useState({
    name: "",
    licenseNumber: "",
    phoneNumber: "",
    licenseExpiry: "",
    shiftHours: "",
    status: "AVAILABLE"
  });

  const handleChange = (e) => {
    setDriver({
      ...driver,
      [e.target.name]: e.target.value
    });
  };

  const saveDriver = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/drivers", driver);

      alert("Driver Added Successfully");
      navigate("/drivers");
    } catch (error) {
      console.error(error);
      alert("Failed to Add Driver");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Driver</h2>

      <form onSubmit={saveDriver}>

        <div className="mb-3">
          <label className="form-label">Driver Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={driver.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">License Number</label>
          <input
            type="text"
            name="licenseNumber"
            className="form-control"
            value={driver.licenseNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            className="form-control"
            value={driver.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">License Expiry</label>
          <input
            type="date"
            name="licenseExpiry"
            className="form-control"
            value={driver.licenseExpiry}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Shift Hours</label>
          <input
            type="number"
            name="shiftHours"
            className="form-control"
            value={driver.shiftHours}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-select"
            value={driver.status}
            onChange={handleChange}
          >
            <option value="AVAILABLE">AVAILABLE</option>
            <option value="ON_TRIP">ON_TRIP</option>
            <option value="OFF_DUTY">OFF_DUTY</option>
          </select>
        </div>

        <button className="btn btn-success">
          Save Driver
        </button>

      </form>
    </div>
  );
}

export default AddDriverPage;