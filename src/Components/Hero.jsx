import React from 'react';
import './Hero.css';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">

      {/* Section 1: Hero */}
      <section className="hero-section hero-1">
        <div className="content-wrapper">
          <div className="card left-card">
            <div className="card-content">
              <span className="card-subtitle">Your Placement Companion</span>
              <h1 className="card-title">
                <span className="title-accent">Solo</span>Track
              </h1>
              <h2 className="card-heading">
                A simple way to track your placement journey
              </h2>
              <p className="card-description">
                SoloTrack is your personal placement tracking web app where students can 
                manually record and manage their placement activities — including companies 
                applied to, job roles, deadlines, and selection status — all in one elegant, 
                organized space.
              </p>
              <div className="feature-tags">
                <span className="tag">📊 Real-time Tracking</span>
                <span className="tag">📅 Deadline Management</span>
                <span className="tag">📈 Progress Analytics</span>
              </div>
            </div>
          </div>
          <div className='a'>
            <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                
                <rect width="800" height="600" fill="#f0f4ff"/>

                
                <circle cx="100" cy="100" r="60" fill="#667eea" opacity="0.1">
                    <animate attributeName="r" values="60;70;60" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="700" cy="500" r="80" fill="#764ba2" opacity="0.1">
                    <animate attributeName="r" values="80;90;80" dur="4s" repeatCount="indefinite"/>
                </circle>

                
                <g transform="translate(80, 180)">
                   
                    <rect x="-20" y="-30" width="240" height="320" rx="15" fill="white" stroke="#667eea" stroke-width="3"/>
                    <rect x="60" y="-30" width="40" height="15" rx="7" fill="#667eea"/>

                    <g transform="translate(10, 20)">
                        
                        <circle cx="0" cy="0" r="12" fill="#10b981" stroke="#0d9488" stroke-width="2">
                            <animate attributeName="fill" values="#10b981;#34d399;#10b981" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <path d="M-4 0 L-1 4 L5 -4" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
                        <text x="25" y="6" font-size="16" fill="#333" font-weight="500">Company Name</text>

                        
                        <circle cx="0" cy="50" r="12" fill="#10b981" stroke="#0d9488" stroke-width="2">
                            <animate attributeName="fill" values="#10b981;#34d399;#10b981" dur="2.3s" repeatCount="indefinite"/>
                        </circle>
                        <path d="M-4 50 L-1 54 L5 46" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
                        <text x="25" y="56" font-size="16" fill="#333" font-weight="500">Job Role</text>

                       
                        <circle cx="0" cy="100" r="12" fill="#f59e0b" stroke="#d97706" stroke-width="2">
                            <animate attributeName="fill" values="#f59e0b;#fbbf24;#f59e0b" dur="2.6s" repeatCount="indefinite"/>
                        </circle>
                        <text x="3" y="106" font-size="14" fill="white" font-weight="bold" text-anchor="middle">!</text>
                        <text x="25" y="106" font-size="16" fill="#333" font-weight="500">Deadline</text>

                        
                        <circle cx="0" cy="150" r="12" fill="#8b5cf6" stroke="#7c3aed" stroke-width="2">
                            <animate attributeName="fill" values="#8b5cf6;#a78bfa;#8b5cf6" dur="2.9s" repeatCount="indefinite"/>
                        </circle>
                        <rect x="-3" y="147" width="6" height="6" fill="white"/>
                        <text x="25" y="156" font-size="16" fill="#333" font-weight="500">Status Update</text>

                       
                        <circle cx="0" cy="200" r="12" fill="#667eea" stroke="#4f46e5" stroke-width="2">
                            <animate attributeName="fill" values="#667eea;#818cf8;#667eea" dur="3.2s" repeatCount="indefinite"/>
                        </circle>
                        <path d="M-5 200 L0 195 L5 200" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
                        <text x="25" y="206" font-size="16" fill="#333" font-weight="500">Track Progress</text>
                    </g>
                </g>

                
              <g transform="translate(500, 250)">
                  
                  <ellipse cx="0" cy="120" rx="50" ry="15" fill="#333" opacity="0.2"/>

                  
                  <rect x="-25" y="90" width="20" height="40" rx="10" fill="#4a5568"/>
                  <rect x="5" y="90" width="20" height="40" rx="10" fill="#4a5568"/>

                  
                  <rect x="-35" y="30" width="70" height="65" rx="15" fill="#667eea">
                      <animate attributeName="height" values="65;68;65" dur="2s" repeatCount="indefinite"/>
                  </rect>

                  
                  <rect x="-50" y="35" width="15" height="50" rx="7" fill="#fbbf24" transform="rotate(-20 -42 35)">
                      <animateTransform attributeName="transform" type="rotate" values="-20 -42 35;-30 -42 35;-20 -42 35" dur="1.5s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="35" y="35" width="15" height="50" rx="7" fill="#fbbf24" transform="rotate(20 42 35)">
                      <animateTransform attributeName="transform" type="rotate" values="20 42 35;30 42 35;20 42 35" dur="1.5s" repeatCount="indefinite"/>
                  </rect>

                  
                  <circle cx="0" cy="0" r="30" fill="#fbbf24"/>

                  
                  <path d="M-25 -10 Q-30 -25 -20 -30 Q0 -35 20 -30 Q30 -25 25 -10" fill="#2d3748"/>

                  
                  <circle cx="-10" cy="-5" r="3" fill="#333">
                      <animate attributeName="r" values="3;1;3" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="10" cy="-5" r="3" fill="#333">
                      <animate attributeName="r" values="3;1;3" dur="3s" repeatCount="indefinite"/>
                  </circle>

                  
                  <path d="M-12 5 Q0 12 12 5" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>

                  
                  <g transform="translate(0, 70)">
                      <rect x="-40" y="0" width="80" height="50" rx="3" fill="#1f2937"/>
                      <rect x="-35" y="5" width="70" height="35" rx="2" fill="#10b981"/>
                      <text x="0" y="28" text-anchor="middle" font-size="12" fill="white" font-weight="bold">HIRED!</text>
                  </g>
              </g>

                
                <g>
                    <path d="M460 140 L465 155 L480 157 L470 167 L473 182 L460 175 L447 182 L450 167 L440 157 L455 155 Z" fill="#f59e0b">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                        <animateTransform attributeName="transform" type="rotate" values="0 460 160;360 460 160" dur="8s" repeatCount="indefinite"/>
                    </path>
                    <path d="M580 160 L583 170 L593 171 L586 178 L588 188 L580 183 L572 188 L574 178 L567 171 L577 170 Z" fill="#10b981">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
                        <animateTransform attributeName="transform" type="rotate" values="0 580 178;360 580 178" dur="10s" repeatCount="indefinite"/>
                    </path>
                </g>

                
                <g>
                   
                    <g transform="translate(620, 200)">
                        <rect x="0" y="5" width="30" height="30" rx="4" fill="white" stroke="#667eea" stroke-width="2"/>
                        <rect x="0" y="5" width="30" height="8" rx="4" fill="#667eea"/>
                        <text x="15" y="26" text-anchor="middle" font-size="12" fill="#667eea" font-weight="bold">15</text>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
                    </g>

                    
                    <g transform="translate(400, 220)">
                        <circle cx="15" cy="15" r="15" fill="#10b981"/>
                        <path d="M8 15 L12 20 L22 10" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite"/>
                    </g>
                </g>

                
                <text x="400" y="80" text-anchor="middle" font-size="44" fill="#667eea" font-weight="bold">Organize Your Placements</text>
                <text x="400" y="125" text-anchor="middle" font-size="22" fill="#764ba2">Track Deadlines · Update Status · Stay Organized</text>

               
                <path d="M0 540 Q200 520 400 540 T800 540 L800 600 L0 600 Z" fill="#667eea" opacity="0.08"/>
                <path d="M0 560 Q200 545 400 560 T800 560 L800 600 L0 600 Z" fill="#764ba2" opacity="0.08"/>
            </svg>
          </div>
          
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="hero-section hero-2">
        <div className="content-wrapper reverse">
          <div className="visual-container">
            <div className="visual-card">
              <div className="visual-inner feature-visual">
                <div className="feature-grid">
                  <div className="feature-item">
                    <div className="feature-icon">🏢</div>
                    <div className="feature-text">
                      <h4>Company Tracking</h4>
                      <p>Record all companies you apply to</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📊</div>
                    <div className="feature-text">
                      <h4>Status Updates</h4>
                      <p>Track application progress</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">⏰</div>
                    <div className="feature-text">
                      <h4>Deadline Alerts</h4>
                      <p>Never miss important dates</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📈</div>
                    <div className="feature-text">
                      <h4>Progress Analytics</h4>
                      <p>Visualize your journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card right-card">
            <div className="card-content">
              <span className="card-subtitle">Comprehensive Tracking</span>
              <h2 className="card-title">
                What You Can Track
              </h2>
              <p className="card-description">
                SoloTrack helps students stay organized during placement season by allowing 
                them to manually track every important detail related to their placement 
                preparation and applications.
              </p>

              <div className="feature-list">
                <div className="feature-point">
                  <div className="point-icon">✓</div>
                  <div className="point-content">
                    <h3>Company & Role Management</h3>
                    <p>Add company names, job roles, and position details</p>
                  </div>
                </div>
                <div className="feature-point">
                  <div className="point-icon">✓</div>
                  <div className="point-content">
                    <h3>Application Status</h3>
                    <p>Track status (Applied, Exam Given, Selected, Rejected)</p>
                  </div>
                </div>
                <div className="feature-point">
                  <div className="point-icon">✓</div>
                  <div className="point-content">
                    <h3>Deadline Tracking</h3>
                    <p>Note upcoming exams, interviews, and deadlines</p>
                  </div>
                </div>
                <div className="feature-point">
                  <div className="point-icon">✓</div>
                  <div className="point-content">
                    <h3>Unified Dashboard</h3>
                    <p>Maintain all placement activities in one organized view</p>
                  </div>
                </div>
              </div>

              <div className="highlight-box">
                <span className="highlight-icon">💡</span>
                <p className="highlight-text">
                  Helps students stay aware of deadlines and progress throughout the placement season
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why It Matters */}
      <section className="hero-section hero-3">
        <div className="content-wrapper">
          <div className="card left-card">
            <div className="card-content">
              <span className="card-subtitle">The Student's Advantage</span>
              <h2 className="card-title">
                Why SoloTrack Matters
              </h2>
              <p className="card-description">
                During placement season, students often apply to multiple companies, 
                track different exams, and manage several deadlines simultaneously. 
                Without a proper system, it becomes challenging to remember application 
                statuses and next steps.
              </p>

              <div className="problem-solution">
                <div className="problem">
                  <h3>The Challenge</h3>
                  <ul>
                    <li>Multiple applications get confusing</li>
                    <li>Deadlines are easily missed</li>
                    <li>No centralized tracking system</li>
                    <li>Progress is hard to measure</li>
                  </ul>
                </div>
                <div className="solution">
                  <h3>Our Solution</h3>
                  <ul>
                    <li>Single dashboard for all applications</li>
                    <li>Smart deadline reminders</li>
                    <li>Visual progress indicators</li>
                    <li>Organized status tracking</li>
                  </ul>
                </div>
              </div>

              <p className="card-description">
                SoloTrack solves these problems by giving students a single, intuitive 
                place to manually track and manage their entire placement journey with 
                clarity and confidence.
              </p>

              <button className="cta-button"  onClick={() => navigate("/Application")}>
                Start Your Journey
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
          <div className="visual-container">
            <div className="visual-card timeline-visual">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Company List</h4>
                    <p>Maintain a list of companies related to placements</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Application Notes</h4>
                    <p>Record application details and dates</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Test & Exam Status</h4>
                    <p>Note whether an exam is upcoming or completed</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Interview Status</h4>
                    <p>Update interview progress for personal tracking</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker success"></div>
                  <div className="timeline-content">
                    <h4>Final Result</h4>
                    <p>Mark selection, rejection, or offer status</p>
                  </div>
                </div>
              </div>
              <div className="success-badge">
                <div className="badge-icon">🏆</div>
                <div className="badge-text">
                  <h3>Track Your Progress</h3>
                  <p>A simple and organized way to view your placement journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;