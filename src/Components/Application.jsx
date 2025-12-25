import React, { useState, useEffect } from "react";
import "./Application.css";
import ViewForm from "./ViewForm";

function Application() {
  const initialForm = {
    company: "",
    role: "",
    type: "",
    deadline: "",
    status: "",
    notes: "",
  };

  const roleOptions = [
    "Software Development Engineer (SDE)",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "System Design Engineer",
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Cybersecurity Engineer",
    "QA / Test Engineer",
    "UI/UX Designer",
    "Research Intern",
  ];

  const typeOptions = ["Internship", "Full-Time", "Off-Campus", "On-Campus"];

  const statusOptions = [
    "Applied",
    "Application Submitted",
    "Assessment Stage",
    "Interview Stage",
    "Offer Received",
    "Rejection",
  ];

  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem("solotrack_applications");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing initial applications", e);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "solotrack_applications",
      JSON.stringify(applications)
    );
  }, [applications]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.company || !form.role) {
      alert("Company/Exam Name and Role/Position are required.");
      return;
    }

    if (editingId) {
      // Update existing entry
      setApplications((prev) =>
        prev.map((app) =>
          app.id === editingId ? { ...app, ...form } : app
        )
      );
      setEditingId(null);
    } else {
      // Add new entry
      const newEntry = {
        ...form,
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
        createdAt: new Date().toISOString(),
      };
      setApplications((prev) => [newEntry, ...prev]);
    }

    setForm(initialForm);
  };

  const handleEdit = (id) => {
    const appToEdit = applications.find((app) => app.id === id);
    if (appToEdit) {
      setForm(appToEdit);
      setEditingId(id);
    }
  };

  const handleClearAll = () => {
    const ok = confirm("Clear all saved applications?");
    if (!ok) return;
    setApplications([]);
    localStorage.removeItem("solotrack_applications");
  };

  const handleDelete = (id) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  return (
    <div className="application-container">
      <a href="/" className="back-home">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 12H5M5 12L12 19M5 12L12 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        Back to Home
      </a>

      <div className="application-header">
        <h1>Application Form</h1>
        <p>Track your placement journey with ease</p>
      </div>

      <div className="form-card">
        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="company">
              Company Name <span className="required">*</span>
              <input
                type="text"
                id="company"
                value={form.company}
                onChange={handleChange}
                name="company"
                placeholder="Enter company name"
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="role">Role / Position *</label>
            <input
              list="roles"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Select or type a role"
              required
            />
            <datalist id="roles">
              {roleOptions.map((r) => (
                <option key={r} value={r} />
              ))}
            </datalist>
          </div>

          <div className="form-group">
            <label htmlFor="type">Placement Type</label>
            <select name="type" value={form.type} onChange={handleChange}>
              <option value="">Select type</option>
              {typeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="deadline">
              Deadline
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="status">
              Status
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="">Select status</option>
                {statusOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-group full-width">
            <label>
              Notes
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Any reminders or context"
                rows={3}
              />
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {editingId ? "Update Application" : "Add Application"}
            </button>
            <button
              type="reset"
              className="reset-btn"
              onClick={() => setForm(initialForm)}
            >
              Reset Form
            </button>
          </div>
        </form>

        <div className="view">
          <ViewForm
            applications={applications}
            onClear={handleClearAll}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default Application;
