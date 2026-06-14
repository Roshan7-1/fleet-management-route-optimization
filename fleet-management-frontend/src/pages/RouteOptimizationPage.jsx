import { useState } from "react";
import axios from "axios";

function RouteOptimizationPage() {

    const [locations, setLocations] = useState([
        { locationName: "", latitude: "", longitude: "" }
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

            alert("Optimization failed");
        }
    };

    return (
        <div className="container mt-4">

            <h2>Route Optimization</h2>

            {locations.map((location, index) => (

                <div key={index} className="row mb-2">

                    <div className="col">
                        <input
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

                    <div className="col">
                        <input
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

                    <div className="col">
                        <input
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
                Add Location
            </button>

            <button
                className="btn btn-success"
                onClick={optimizeRoute}
            >
                Optimize Route
            </button>

            <hr />

            <h4>Optimized Route</h4>

            <ul className="list-group">

                {optimizedRoute.map((location) => (

                    <li
                        key={location.stopOrder}
                        className="list-group-item"
                    >
                        Stop {location.stopOrder} :
                        {" "}
                        {location.locationName}
                    </li>
                ))}

            </ul>

        </div>
    );
}

export default RouteOptimizationPage;