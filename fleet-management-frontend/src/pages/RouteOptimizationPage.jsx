import { useState } from "react";
import axios from "axios";

function RouteOptimizationPage() {

    const [locations, setLocations] = useState([
        {
            locationName: "",
            latitude: "",
            longitude: ""
        }
    ]);

    const [optimizedRoute, setOptimizedRoute] = useState([]);

    const addLocation = () => {
        setLocations([
            ...locations,
            {
                locationName: "",
                latitude: "",
                longitude: ""
            }
        ]);
    };

    const handleChange = (index, field, value) => {

        const updated = [...locations];
        updated[index][field] = value;

        setLocations(updated);
    };

    const optimizeRoute = async () => {

        try {

            const response = await axios.post(
                "http://localhost:8080/api/routes/optimize",
                locations
            );

            setOptimizedRoute(response.data);

        } catch (error) {

            console.error(error);

            alert("Route Optimization Failed");
        }
    };

    return (
        <div className="container mt-4">

            {/* Header Card */}
            <div className="card bg-primary text-white shadow-lg border-0 mb-4">
                <div className="card-body">
                    <h2 className="fw-bold">
                        🛣 Route Optimization
                    </h2>

                    <p className="mb-0">
                        Find the most efficient delivery route and
                        reduce travel distance.
                    </p>
                </div>
            </div>

            {/* Input Section */}
            <div className="card shadow-sm border-0 mb-4">

                <div className="card-body">

                    <h5 className="mb-3">
                        📍 Delivery Locations
                    </h5>

                    {locations.map((location, index) => (

                        <div key={index} className="row mb-3">

                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Location Name"
                                    value={location.locationName}
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "locationName",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className="col-md-4">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Latitude"
                                    value={location.latitude}
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "latitude",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className="col-md-4">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Longitude"
                                    value={location.longitude}
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "longitude",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                        </div>

                    ))}

                    <button
                        className="btn btn-primary me-2"
                        onClick={addLocation}
                    >
                        ➕ Add Location
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={optimizeRoute}
                    >
                        🛣 Optimize Route
                    </button>

                </div>

            </div>

            {/* Statistics */}
            {optimizedRoute.length > 0 && (

                <div className="row mb-4">

                    <div className="col-md-4">

                        <div className="card bg-success text-white shadow border-0">

                            <div className="card-body text-center">

                                <h6>Total Stops</h6>

                                <h2>
                                    {optimizedRoute.length}
                                </h2>

                            </div>

                        </div>

                    </div>

                </div>

            )}

            {/* Optimized Route */}
            {optimizedRoute.length > 0 && (

                <div className="card shadow-sm border-0">

                    <div className="card-body">

                        <h4 className="mb-3">
                            🛣 Optimized Route
                        </h4>

                        <ul className="list-group">

                            {optimizedRoute.map((location) => (

                                <li
                                    key={location.stopOrder}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >

                                    <span>
                                        📍 {location.locationName}
                                    </span>

                                    <span className="badge bg-primary">
                                        Stop {location.stopOrder}
                                    </span>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

            )}

        </div>
    );
}

export default RouteOptimizationPage;