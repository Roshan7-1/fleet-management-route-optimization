import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/ApiService";

function EditFuelRecordPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);

  const [fuelRecord, setFuelRecord] = useState({
    fuelDate: "",
    fuelQuantity: "",
    cost: "",
    vehicleId: ""
  });

  useEffect(() => {
    fetchFuelRecord();
    fetchVehicles();
  }, []);

  const fetchFuelRecord = async () => {
    const response = await api.get(`/api/fuel-records/${id}`);

    setFuelRecord({
      fuelDate: response.data.fuelDate,
      fuelQuantity: response.data.fuelQuantity,
      cost: response.data.cost,
      vehicleId: response.data.vehicle?.id || ""
    });
  };

  const fetchVehicles = async () => {
    const response = await api.get("/api/vehicles");
    setVehicles(response.data);
  };

  const handleChange = (e) => {
    setFuelRecord({
      ...fuelRecord,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      fuelDate: fuelRecord.fuelDate,
      fuelQuantity: Number(fuelRecord.fuelQuantity),
      cost: Number(fuelRecord.cost),
      vehicle: {
        id: Number(fuelRecord.vehicleId)
      }
    };

    try {
      await api.put(
        `/api/fuel-records/${id}`,
        payload
      );

      navigate("/fuel-records");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Fuel Record</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Fuel Date</label>
          <input
            type="date"
            name="fuelDate"
            className="form-control"
            value={fuelRecord.fuelDate}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Fuel Quantity</label>
          <input
            type="number"
            name="fuelQuantity"
            className="form-control"
            value={fuelRecord.fuelQuantity}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Cost</label>
          <input
            type="number"
            name="cost"
            className="form-control"
            value={fuelRecord.cost}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Vehicle</label>
          <select
            name="vehicleId"
            className="form-select"
            value={fuelRecord.vehicleId}
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
          Update Fuel Record
        </button>

      </form>
    </div>
  );
}

export default EditFuelRecordPage;