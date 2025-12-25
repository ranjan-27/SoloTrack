import React, { useState, useEffect } from "react";
import "./Bell.css";

const Bell = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("solotrack_notifications")) || [];
    setNotifications(saved);

    // Sync across tabs
    const syncNotifications = () => {
      const updated = JSON.parse(localStorage.getItem("solotrack_notifications")) || [];
      setNotifications(updated);
    };
    window.addEventListener("storage", syncNotifications);
    return () => window.removeEventListener("storage", syncNotifications);
  }, []);

  // 🔔 Clear all notifications
  const clearAll = () => {
    localStorage.removeItem("solotrack_notifications");
    setNotifications([]);
  };

  return (
    <div className="bell-container">
      <div className="bell-icon" onClick={() => setOpen(!open)}>
        🔔
        {notifications.length > 0 && (
          <span className="bell-badge">{notifications.length}</span>
        )}
      </div>

      {open && (
        <div className="bell-dropdown">
          <div className="bell-header">
            <h4>Notifications</h4>
            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
          </div>
          {notifications.length > 0 ? (
            <>
              <ul>
                {notifications.map((n) => (
                  <li key={n.id}>
                    <p>{n.message}</p>
                    <small>{n.timestamp}</small>
                  </li>
                ))}
              </ul>
              <button className="clear-btn" onClick={clearAll}>
                Clear All
              </button>
            </>
          ) : (
            <p>No notifications</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Bell;

