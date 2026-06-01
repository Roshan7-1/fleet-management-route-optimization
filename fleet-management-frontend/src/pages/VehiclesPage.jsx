import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/ApiService";

function VehiclesPage() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    try {
      const response = await api.get("/api/vehicles");
      setVehicles(response.data);
    } catch (error) {
      console.error("Error loading vehicles:", error);
    }
  };

  const deleteVehicle = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this vehicle?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/api/vehicles/${id}`);
      loadVehicles();
    } catch (error) {
      console.error(error);
      alert("Unable to delete vehicle");
    }
  };

  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="page-title mb-0">
          🚚 Vehicle Management
        </h1>

        <Link
          to="/vehicles/add"
          className="btn btn-success px-4 py-2"
        >
          + Add Vehicle
        </Link>
      </div>

      {/* Table Card */}
      <div className="table-container">

        <table className="table vehicle-table align-middle">

          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle Number</th>
              <th>Capacity</th>
              <th>Status</th>
              <th>Driver Assigned</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {vehicles.length > 0 ? (
              vehicles.map((vehicle) => (
                <tr key={vehicle.id}>

                  <td>{vehicle.id}</td>

                  <td>
                    <strong>
                      {vehicle.vehicleNumber}
                    </strong>
                  </td>

                  <td>
                    {vehicle.capacity} kg
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        vehicle.maintenanceStatus === "GOOD"
                          ? "bg-success"
                          : vehicle.maintenanceStatus === "ACTIVE"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {vehicle.maintenanceStatus}
                    </span>
                  </td>

                  <td>
                    {vehicle.driver
                      ? vehicle.driver.name
                      : "Not Assigned"}
                  </td>

                  <td>

                    <Link
                      to={`/vehicles/edit/${vehicle.id}`}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteVehicle(vehicle.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-4"
                >
                  No Vehicles Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default VehiclesPage;