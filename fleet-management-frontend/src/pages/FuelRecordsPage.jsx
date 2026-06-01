import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/ApiService";

function FuelRecordsPage() {
  const [fuelRecords, setFuelRecords] = useState([]);

  useEffect(() => {
    fetchFuelRecords();
  }, []);

  const fetchFuelRecords = async () => {
    try {
      const response = await api.get("/api/fuel-records");
      setFuelRecords(response.data);
    } catch (error) {
      console.error("Error fetching fuel records:", error);
    }
  };

  const deleteFuelRecord = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this fuel record?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/api/fuel-records/${id}`);
      fetchFuelRecords();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Fuel Records Management</h2>

        <Link
          to="/fuel-records/add"
          className="btn btn-primary"
        >
          Add Fuel Record
        </Link>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Fuel Date</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Vehicle</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {fuelRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.fuelDate}</td>
              <td>{record.fuelQuantity}</td>
              <td>₹ {record.cost}</td>

              <td>
                {record.vehicle
                  ? record.vehicle.vehicleNumber
                  : "N/A"}
              </td>

              <td>
                <Link
                  to={`/fuel-records/edit/${record.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteFuelRecord(record.id)}
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

export default FuelRecordsPage;