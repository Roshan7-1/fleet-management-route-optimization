# 🚚 Fleet Management System

A full-stack Fleet Management System built using Spring Boot, React, JWT Authentication, and MySQL.

The system helps organizations efficiently manage vehicles, drivers, trips, fuel records, and maintenance activities through a secure and user-friendly dashboard.

---

## 📌 Features

### 🔐 Authentication & Security

* JWT Authentication
* Spring Security
* Role-based access ready
* Protected Routes
* Secure REST APIs

### 🚚 Vehicle Management

* Add Vehicle
* Update Vehicle
* Delete Vehicle
* View Vehicle List

### 👨‍✈️ Driver Management

* Add Driver
* Update Driver
* Delete Driver
* Driver Availability Tracking

### 🛣️ Trip Management

* Create Trip
* Assign Driver
* Track Trips
* View Trip Records

### ⛽ Fuel Management

* Add Fuel Records
* Track Fuel Consumption
* View Fuel History

### 🔧 Maintenance Management

* Add Maintenance Records
* Track Maintenance Status
* View Maintenance History

### 📊 Dashboard

* Total Vehicles
* Total Drivers
* Total Trips
* Total Fuel Records
* Quick Actions Panel
* Modern Responsive UI

---

## 🛠️ Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* Hibernate / JPA
* MySQL

### Frontend

* React
* React Router
* Axios
* Bootstrap
* CSS3

### Tools

* Git
* GitHub
* Postman
* VS Code
* IntelliJ IDEA

---

## 📂 Project Structure

Fleet-Management/

├── fleet-management-backend/

│ ├── controller/

│ ├── service/

│ ├── repository/

│ ├── entity/

│ ├── security/

│ └── config/

│

├── fleet-management-frontend/

│ ├── pages/

│ ├── components/

│ ├── services/

│ └── styles/

│

└── README.md

---

## 🚀 Installation

### Backend

```bash
git clone <repository-url>
cd fleet-management-backend
./gradlew bootRun
```

### Frontend

```bash
cd fleet-management-frontend
npm install
npm start
```

---

## Database Configuration

Update application.properties

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fleet_management
spring.datasource.username=root
spring.datasource.password=yourpassword
```

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Drivers

GET /api/drivers

POST /api/drivers

PUT /api/drivers/{id}

DELETE /api/drivers/{id}

### Vehicles

GET /api/vehicles

POST /api/vehicles

PUT /api/vehicles/{id}

DELETE /api/vehicles/{id}

### Trips

GET /api/trips

POST /api/trips

PUT /api/trips/{id}

DELETE /api/trips/{id}

### Fuel Records

GET /api/fuel-records

POST /api/fuel-records

### Maintenance

GET /api/maintenance

POST /api/maintenance

---

## Future Enhancements

* Dashboard Analytics Charts
* Export Reports (CSV/PDF)
* Email Notifications
* Driver Assignment Optimization
* Dark Mode
* Deployment on Cloud

---

## Author

Roshan Ghogare

Java Full Stack Developer

GitHub: https://github.com/Roshan7-1

```
```
