import React from 'react'
import './ViewForm.css'

function ViewForm({ applications = [], onClear, onDelete, onEdit }) {
  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'applied': return '#4299e1';
      case 'interview': return '#d69e2e';
      case 'offer': return '#38a169';
      case 'rejected': return '#f56565';
      case 'pending': return '#a0aec0';
      default: return '#a0aec0';
    }
  };

  return (
    <div className='viewf-container'>
      <div className='viewf'>
        <div className='viewf-header'>
          <h3>My Applications</h3>
          <div className='viewf-summary'>
            <span className='summary-item'>Total: {applications.length}</span>
            <span className='summary-item'>Active: {applications.filter(app => app.status?.toLowerCase() !== 'rejected').length}</span>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className='empty-state'>
            <div className='empty-icon'>📋</div>
            <p>No Applications Found</p>
            <p className='empty-subtext'>Add your first job application to get started</p>
          </div>
        ) : (
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Role</th>
                  <th>Type</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Notes</th>
                  {(onDelete || onEdit) && <th className='actions-header'>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td className='company-cell'>
                      <div className='company-info'>
                        <span className='company-name'>{app.company}</span>
                      </div>
                    </td>
                    <td>
                      <span className='role-text'>{app.role}</span>
                    </td>
                    <td>
                      <span className='type-badge'>{app.type || "Not specified"}</span>
                    </td>
                    <td>
                      <div className='deadline-cell'>
                        {app.deadline ? (
                          <>
                            <span className='deadline-date'>{app.deadline}</span>
                            {/* You could add date comparison logic here */}
                          </>
                        ) : (
                          <span className='no-date'>No deadline</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <span 
                        className='status-badge'
                        style={{ backgroundColor: getStatusColor(app.status) }}
                      >
                        {app.status || "Not set"}
                      </span>
                    </td>
                    <td>
                      <div className='notes-cell'>
                        {app.notes || <span className='no-notes'>No notes</span>}
                      </div>
                    </td>
                    {(onDelete || onEdit) && (
                      <td className='actions-cell'>
                        <div className='action-buttons'>
                          {onEdit && (
                            <button 
                              className='action-btn edit-btn'
                              onClick={() => onEdit(app.id)}
                              title="Edit application"
                            >
                              <svg className='btn-icon' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                              </svg>
                              Edit
                            </button>
                          )}
                          {onDelete && (
                            <button 
                              className='action-btn delete-btn'
                              onClick={() => onDelete(app.id)}
                              title="Delete application"
                            >
                              <svg className='btn-icon' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M3 6h18"/>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                <line x1="10" y1="11" x2="10" y2="17"/>
                                <line x1="14" y1="11" x2="14" y2="17"/>
                              </svg>
                              Delete
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {onClear && applications.length > 0 && (
          <div className='clear-section'>
            <button className='clear-all-btn' onClick={onClear}>
              <svg className='clear-icon' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                <line x1="10" y1="11" x2="10" y2="17"/>
                <line x1="14" y1="11" x2="14" y2="17"/>
              </svg>
              Clear All Applications
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ViewForm