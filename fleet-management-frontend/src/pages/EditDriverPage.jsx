import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import api from "../services/ApiService";

function EditDriverPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [driver, setDriver] = useState({
    name: "",
    licenseNumber: "",
    phoneNumber: "",
    licenseExpiry: "",
    shiftHours: "",
    status: "AVAILABLE"
  });

  useEffect(() => {
    loadDriver();
  }, []);

  const loadDriver = async () => {
    try {
      const response = await api.get(`/api/drivers/${id}`);

      setDriver({
        name: response.data.name || "",
        licenseNumber: response.data.licenseNumber || "",
        phoneNumber: response.data.phoneNumber || "",
        licenseExpiry: response.data.licenseExpiry || "",
        shiftHours: response.data.shiftHours || "",
        status: response.data.status || "AVAILABLE"
      });
    } catch (error) {
      console.error(error);
      alert("Failed to load driver details");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setDriver({
      ...driver,
      [e.target.name]: e.target.value
    });
  };

  const updateDriver = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/api/drivers/${id}`, driver);

      alert("Driver updated successfully!");
      navigate("/drivers");
    } catch (error) {
      console.error(error);
      alert("Failed to update driver");
    }
  };

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <h4>Loading Driver Details...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div
            className="card border-0 shadow-lg"
            style={{ borderRadius: "20px" }}
          >
            <div className="card-body p-5">

              <h2 className="text-primary fw-bold mb-4">
                <FaUserTie className="me-2" />
                Edit Driver Details
              </h2>

              <form onSubmit={updateDriver}>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Driver Name
                  </label>
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
                  <label className="form-label fw-semibold">
                    License Number
                  </label>
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
                  <label className="form-label fw-semibold">
                    Phone Number
                  </label>
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
                  <label className="form-label fw-semibold">
                    License Expiry Date
                  </label>
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
                  <label className="form-label fw-semibold">
                    Shift Hours
                  </label>
                  <input
                    type="number"
                    name="shiftHours"
                    className="form-control"
                    value={driver.shiftHours}
                    onChange={handleChange}
                    min="1"
                    max="24"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Driver Status
                  </label>

                  <select
                    name="status"
                    className="form-select"
                    value={driver.status}
                    onChange={handleChange}
                  >
                    <option value="AVAILABLE">
                      AVAILABLE
                    </option>

                    <option value="ON_TRIP">
                      ON TRIP
                    </option>

                    <option value="OFF_DUTY">
                      OFF DUTY
                    </option>
                  </select>
                </div>

                <div className="d-flex gap-3">

                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                  >
                    Update Driver
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary px-4"
                    onClick={() => navigate("/drivers")}
                  >
                    Back
                  </button>

                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EditDriverPage;