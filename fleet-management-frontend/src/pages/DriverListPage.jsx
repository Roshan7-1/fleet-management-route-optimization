import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/ApiService";

function DriverListPage() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    loadDrivers();
  }, []);

  const loadDrivers = async () => {
    try {
      const response = await api.get("/api/drivers");
      setDrivers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteDriver = async (id) => {
    if (!window.confirm("Delete Driver?")) return;

    try {
      await api.delete(`/api/drivers/${id}`);
      loadDrivers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Drivers</h2>

        <Link
          to="/drivers/add"
          className="btn btn-success"
        >
          Add Driver
        </Link>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
          <th>ID</th>
<th>Name</th>
<th>License Number</th>
<th>License Expiry</th>
<th>Shift Hours</th>
<th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
           <td>{driver.id}</td>
<td>{driver.name}</td>
<td>{driver.licenseNumber}</td>
<td>{driver.licenseExpiry}</td>
<td>{driver.shiftHours}</td>
<td>{driver.status}</td>

              <td>
                <Link
                  to={`/drivers/edit/${driver.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteDriver(driver.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DriverListPage;