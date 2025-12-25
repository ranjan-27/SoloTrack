import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import "./Analytics.css";

const Analytics = () => {
  const [applications, setApplications] = useState([]);

  // Load applications from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("solotrack_applications");
    if (saved) setApplications(JSON.parse(saved));
  }, []);

  // Status distribution data
  const statusData = [
    {
      name: "Applied",
      value: applications.filter((a) => a.status === "Applied").length,
      color: "#f59e0b",
    },
    {
      name: "Interview Stage",
      value: applications.filter((a) => a.status === "Interview Stage").length,
      color: "#8b5cf6",
    },
    {
      name: "Offer Received",
      value: applications.filter((a) => a.status === "Offer Received").length,
      color: "#10b981",
    },
    {
      name: "Rejection",
      value: applications.filter((a) => a.status === "Rejection").length,
      color: "#ef4444",
    },
  ].filter((d) => d.value > 0);

  // Timeline data (applications per month)
  const timelineData = applications
    .reduce((acc, app) => {
      if (!app.deadline) return acc;
      const month = app.deadline.substring(0, 7); // YYYY-MM
      const existing = acc.find((d) => d.month === month);
      if (existing) {
        existing.count += 1;
      } else {
        acc.push({ month, count: 1 });
      }
      return acc;
    }, [])
    .sort((a, b) => a.month.localeCompare(b.month));

  // Conversion rate
  const conversionRate =
    applications.length > 0
      ? (
          (applications.filter((a) => a.status === "Offer Received").length /
            applications.length) *
          100
        ).toFixed(1)
      : 0;

  return (
    <div className="analytics-container">
      <h2 className="analytics-title">Analytics & Insights</h2>

      {/* Status Distribution + Timeline */}
      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Status Distribution</h3>
          {statusData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="no-data">No data available</p>
          )}
        </div>

        <div className="analytics-card">
          <h3>Applications Over Time</h3>
          {timelineData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    background: "white",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#667eea"
                  strokeWidth={3}
                  name="Applications"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="no-data">No data available</p>
          )}
        </div>
      </div>

      {/* Conversion Rate */}
      <div className="analytics-card">
        <h3>Conversion Rate</h3>
        <div className="conversion-container">
          <div className="conversion-bar">
            <div
              className="conversion-fill"
              style={{ width: `${conversionRate}%` }}
            />
          </div>
          <p className="conversion-text">
            {
              applications.filter((a) => a.status === "Offer Received").length
            }{" "}
            accepted out of {applications.length} total applications
          </p>
          <div className="conversion-rate">{conversionRate}%</div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
