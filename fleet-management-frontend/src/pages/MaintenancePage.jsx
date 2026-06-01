import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/ApiService";

function MaintenancePage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await api.get("/api/maintenance");
      setRecords(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRecord = async (id) => {
    if (!window.confirm("Delete maintenance record?")) {
      return;
    }

    try {
      await api.delete(`/api/maintenance/${id}`);
      fetchRecords();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between mb-3">
        <h2>Maintenance Management</h2>

        <Link
          to="/maintenance/add"
          className="btn btn-primary"
        >
          Add Maintenance
        </Link>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Service Date</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Vehicle</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.serviceDate}</td>
              <td>{record.description}</td>
              <td>₹ {record.cost}</td>

              <td>
                {record.vehicle
                  ? record.vehicle.vehicleNumber
                  : "N/A"}
              </td>

              <td>
                <Link
                  to={`/maintenance/edit/${record.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteRecord(record.id)}
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

export default MaintenancePage;