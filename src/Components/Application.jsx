import React, { useState } from "react";
import "./Application.css";

function Application() {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    customRole: "",
    type: "",
    deadline: "",
    status: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="application-container">
      <a href="/" className="back-home">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role / Position</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="SDE">Software Development Engineer (SDE)</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="System Design Engineer">System Design Engineer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Machine Learning Engineer">Machine Learning Engineer</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="Cloud Engineer">Cloud Engineer</option>
              <option value="Cybersecurity Engineer">Cybersecurity Engineer</option>
              <option value="QA / Test Engineer">QA / Test Engineer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Research Intern">Research Intern</option>
              <option value="Other">Other (Type manually)</option>
            </select>
          </div>

          {formData.role === "Other" && (
            <div className="form-group custom-role-input">
              <label htmlFor="customRole">Custom Role</label>
              <input
                type="text"
                id="customRole"
                name="customRole"
                placeholder="Enter custom role"
                value={formData.customRole}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="type">Placement Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Select type</option>
              <option value="Internship">Internship</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Off-Campus">Off-Campus</option>
              <option value="On-Campus">On-Campus</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="deadline">Deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select status</option>
              <option value="Applied">Applied</option>
              <option value="Application Submitted">Application Submitted</option>
              <option value="Assessment Stage">Assessment Stage</option>
              <option value="Interview Stage">Interview Stage</option>
              <option value="Offer Received">Offer Received</option>
              <option value="Rejection">Rejection</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Add remarks or additional details..."
              value={formData.notes}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Submit Application
            </button>
            <button type="reset" className="reset-btn" onClick={() => setFormData({
              company: "", role: "", customRole: "", type: "", deadline: "", status: "", notes: ""
            })}>
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Application;