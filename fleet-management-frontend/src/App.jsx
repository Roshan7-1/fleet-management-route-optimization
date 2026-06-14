import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import VehiclesPage from "./pages/VehiclesPage";
import AddVehiclePage from "./pages/AddVehiclePage";

import DriverListPage from "./pages/DriverListPage";
import AddDriverPage from "./pages/AddDriverPage";
import EditDriverPage from "./pages/EditDriverPage";

import TripsPage from "./pages/TripsPage";
import FuelRecordsPage from "./pages/FuelRecordsPage";
import MaintenancePage from "./pages/MaintenancePage";

import AddTripPage from "./pages/AddTripPage";
import EditTripPage from "./pages/EditTripPage";

import AddFuelRecordPage from "./pages/AddFuelRecordPage";
import EditFuelRecordPage from "./pages/EditFuelRecordPage";

import AddMaintenancePage from "./pages/AddMaintenancePage";
import EditMaintenancePage from "./pages/EditMaintenancePage";

import EditVehiclePage from "./pages/EditVehiclePage";
import RouteOptimizationPage
from "./pages/RouteOptimizationPage";
function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Hide Navbar only on Login Page */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vehicles"
          element={
            <ProtectedRoute>
              <VehiclesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vehicles/add"
          element={
            <ProtectedRoute>
              <AddVehiclePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/drivers"
          element={
            <ProtectedRoute>
              <DriverListPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/drivers/add"
          element={
            <ProtectedRoute>
              <AddDriverPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/drivers/edit/:id"
          element={
            <ProtectedRoute>
              <EditDriverPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trips"
          element={
            <ProtectedRoute>
              <TripsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fuel-records"
          element={
            <ProtectedRoute>
              <FuelRecordsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/maintenance"
          element={
            <ProtectedRoute>
              <MaintenancePage />
            </ProtectedRoute>
          }
        />
        <Route
  path="/trips/add"
  element={
    <ProtectedRoute>
      <AddTripPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/trips/edit/:id"
  element={
    <ProtectedRoute>
      <EditTripPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/fuel-records/add"
  element={
    <ProtectedRoute>
      <AddFuelRecordPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/fuel-records/edit/:id"
  element={
    <ProtectedRoute>
      <EditFuelRecordPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/maintenance/add"
  element={
    <ProtectedRoute>
      <AddMaintenancePage />
    </ProtectedRoute>
  }
/>

<Route
  path="/maintenance/edit/:id"
  element={
    <ProtectedRoute>
      <EditMaintenancePage />
    </ProtectedRoute>
  }
/>

<Route
  path="/vehicles/edit/:id"
  element={
    <ProtectedRoute>
      <EditVehiclePage />
    </ProtectedRoute>
  }
/>
<Route
    path="/routes"
    element={<RouteOptimizationPage />}
/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;