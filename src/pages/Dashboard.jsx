import React from "react";
import useNavigation from "../components/Navigate";
const Dashboard = () => {
  const { goToLogin } = useNavigation();
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#2e7d32",
          color: "white",
          padding: "20px 10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Smart Farm</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Dashboard</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Sensors</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Statistics</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Settings</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }} onClick={goToLogin}>Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, backgroundColor: "#f1f8e9", padding: "40px" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "30px", color: "#2e7d32" }}>Welcome to the Dashboard</h1>

        {/* Sensor Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "#2e7d32" }}>Temperature</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>28°C</p>
          </div>

          <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "#2e7d32" }}>Humidity</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>65%</p>
          </div>

          <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "#2e7d32" }}>Light</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>720 lux</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
