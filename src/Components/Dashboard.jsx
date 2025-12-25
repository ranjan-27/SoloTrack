import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = ({ darkMode = false }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("solotrack_applications");
    if (saved) setApplications(JSON.parse(saved));
  }, []);

  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "Applied").length,
    interviews: applications.filter((a) => a.status === "Interview Stage").length,
    offers: applications.filter((a) => a.status === "Offer Received").length,
  };

  const upcomingDeadlines = applications
    .filter(
      (a) =>
        a.deadline &&
        new Date(a.deadline) >= new Date() &&
        a.status !== "Rejection" &&
        a.status !== "Offer Received"
    )
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .slice(0, 5);

  const StatCard = ({ title, value, color, icon }) => (
    <div
      className={`stat-card ${darkMode ? "dark" : "light"}`}
      style={{ border: `3px solid ${color}` }}
    >
      <div className="stat-icon">{icon}</div>
      <h3 className="stat-title">{title}</h3>
      <p className="stat-value" style={{ color }}>{value}</p>
    </div>
  );

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : "light"}`}>
      <h2 className="dashboard-title">Dashboard Overview</h2>

      <div className="stats-grid">
        <StatCard title="Total Applications" value={stats.total} color="#667eea" icon="📊" />
        <StatCard title="Pending" value={stats.pending} color="#f59e0b" icon="⏳" />
        <StatCard title="Interviews" value={stats.interviews} color="#8b5cf6" icon="🎤" />
        <StatCard title="Offers" value={stats.offers} color="#10b981" icon="🎉" />
      </div>

      <div className={`deadlines-card ${darkMode ? "dark" : "light"}`}>
        <h3>Upcoming Deadlines</h3>
        {upcomingDeadlines.length > 0 ? (
          <div className="deadlines-list">
            {upcomingDeadlines.map((app) => {
              const daysUntil = Math.ceil(
                (new Date(app.deadline) - new Date()) / (1000 * 60 * 60 * 24)
              );
              return (
                <div
                  key={app.id}
                  className="deadline-item"
                  style={{
                    borderLeft: `4px solid ${
                      daysUntil <= 3 ? "#ef4444" : "#667eea"
                    }`,
                  }}
                >
                  <div>
                    <strong>{app.company}</strong>
                    <p className="deadline-role">{app.role || app.type}</p>
                  </div>
                  <div className="deadline-info">
                    <div
                      className="deadline-days"
                      style={{ color: daysUntil <= 3 ? "#ef4444" : "#667eea" }}
                    >
                      {daysUntil === 0
                        ? "Today!"
                        : `${daysUntil} day${daysUntil !== 1 ? "s" : ""}`}
                    </div>
                    <div className="deadline-date">{app.deadline}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="no-deadlines">No upcoming deadlines</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
