import './App.css';
import React, { useEffect } from "react";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Application from './Components/Application';
import Analytics from './Components/Analytics';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  useEffect(() => {
    // Load applications from localStorage
    const applications = JSON.parse(localStorage.getItem("solotrack_applications")) || [];

    // Find upcoming deadlines
    const upcomingDeadlines = applications.filter(
      (a) =>
        a.deadline &&
        new Date(a.deadline) >= new Date() &&
        a.status !== "Rejection" &&
        a.status !== "Offer Received"
    );

    // Trigger toast + save notifications for deadlines <= 3 days
    upcomingDeadlines.forEach((app) => {
      const daysUntil = Math.ceil(
        (new Date(app.deadline) - new Date()) / (1000 * 60 * 60 * 24)
      );

      if (daysUntil <= 3) {
        const notification = {
          id: Date.now(),
          message: `⚠️ Deadline for ${app.company} - ${app.role} is in ${daysUntil} day${daysUntil !== 1 ? "s" : ""}!`,
          timestamp: new Date().toLocaleString()
        };

        // Save notification in LocalStorage
        const existing = JSON.parse(localStorage.getItem("solotrack_notifications")) || [];
        localStorage.setItem("solotrack_notifications", JSON.stringify([notification, ...existing]));

        // Show toast globally
        toast.warning(notification.message);
      }
    });
  }, []); // runs once when site loads

  return (
    <Router>
      {/* Toast container must be global */}
      <ToastContainer position="top-right" autoClose={5000} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/application" element={<Application />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
      <Footer />
    </Router>
  );
}

