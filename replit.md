# Job Application Tracker

## Overview

This is a React-based web application for tracking job applications. The app allows users to manage their job application process by adding, viewing, and tracking applications with features like deadline notifications, analytics dashboards, and status tracking.

The application is built with React 18 and Vite, using React Router for navigation and Recharts for data visualization. The project is designed to integrate with Firebase for authentication (email/password and phone OTP) and Firestore for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with functional components and hooks
- **Vite** as the build tool for fast development with Hot Module Reloading
- **React Router DOM v7** for client-side routing

### Component Structure
The application follows a component-based architecture with these main sections:

| Component | Purpose |
|-----------|---------|
| `App.jsx` | Main router configuration |
| `Navbar.jsx` | Navigation with dynamic auth-aware links |
| `Hero.jsx` | Landing page with marketing content |
| `Dashboard.jsx` | User statistics and upcoming deadlines |
| `Application.jsx` | CRUD interface for job applications |
| `ViewForm.jsx` | Detailed application view/edit form |
| `Analytics.jsx` | Charts showing application statistics |
| `Login.jsx` / `Signup.jsx` | Authentication pages |
| `Footer.jsx` | Site footer |

### Data Model
Job applications include these fields:
- Company name
- Role/Position
- Application type
- Deadline date
- Status (for tracking progress)
- Notes

### Styling Approach
- Component-scoped CSS files (e.g., `Dashboard.css`, `Navbar.css`)
- Dark/Light theme support via CSS classes
- Gradient-heavy visual design with animations
- Responsive grid layouts

### Key Features to Implement
1. **Authentication**: Firebase Auth with email/password signup and phone OTP login
2. **Data Persistence**: Firestore for user-specific application data
3. **Deadline Notifications**: Browser alerts when deadlines are within 3 days
4. **Analytics**: PieChart for status distribution, LineChart for timeline tracking

## External Dependencies

### Core Libraries
- **react**: ^18.2.0 - UI framework
- **react-dom**: ^18.2.0 - React DOM renderer
- **react-router-dom**: ^7.11.0 - Client-side routing

### Data Visualization
- **recharts**: ^3.6.0 - Charts library for analytics (PieChart, LineChart)

### Build Tools
- **vite**: ^5.0.0 - Development server and bundler
- **@vitejs/plugin-react**: ^4.2.0 - React plugin for Vite
- **typescript**: ^5.2.2 - TypeScript support (optional, JSX files work)

### Planned Integrations (Not Yet Configured)
- **Firebase Authentication**: For user login/signup with email and phone OTP
- **Firebase Firestore**: For storing user-specific application data

### Development Server
- Runs on port 5000
- Configured for host `0.0.0.0` to work with Replit's networking