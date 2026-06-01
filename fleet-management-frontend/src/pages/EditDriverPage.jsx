import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/ApiService";

function EditDriverPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [driver, setDriver] = useState({
    name: "",
    licenseNumber: "",
    phoneNumber: ""
  });

  useEffect(() => {
    loadDriver();
  }, []);

  const loadDriver = async () => {
    try {
      const response = await api.get(
        `/api/drivers/${id}`
      );

      setDriver(response.data);
    } catch (error) {
      console.error(error);
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
      await api.put(
        `/api/drivers/${id}`,
        driver
      );

      alert("Driver Updated");

      navigate("/drivers");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Driver</h2>

      <form onSubmit={updateDriver}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            value={driver.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="licenseNumber"
            className="form-control"
            value={driver.licenseNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="phoneNumber"
            className="form-control"
            value={driver.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">
          Update Driver
        </button>
      </form>
    </div>
  );
}

export default EditDriverPage;