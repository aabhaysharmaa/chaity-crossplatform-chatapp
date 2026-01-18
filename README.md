# Real-Time Chat Application – Cross-Platform Messaging Built From Scratch

This is the source code for a production-ready real-time chat platform that works seamlessly across mobile and web. The project focuses on custom WebSocket implementation and cross-platform development using React Native for mobile and React for web, while a unified backend built with Bun, Express, and MongoDB handles all real-time communication. Authentication is managed through Clerk with professional development practices including automated code reviews and error monitoring for production-grade reliability.

---

## What We're Building

A full-stack real-time messaging platform that demonstrates modern cross-platform development with a custom-built real-time infrastructure. No third-party chat services—everything is built from the ground up.

Core goals:

* Real-time messaging across mobile and web platforms
* Custom WebSocket server without Firebase, Pusher, or Ably
* Single backend serving both platforms
* Professional development workflow with Git and GitHub
* Production-ready error monitoring and deployment
* Sub-second message delivery and live presence tracking

---

## Features

### Real-Time Messaging

Instant message delivery using custom WebSocket implementation with message history persistence and read receipts. Typing indicators show when users are composing messages with online and offline presence tracking for all participants.

### Cross-Platform Applications

Native mobile app built with React Native for iOS and Android with responsive web application using React. Shared backend API ensures consistent features across platforms with unified design language and user experience.

### Live User Presence

Real-time online and offline status updates with accurate presence tracking across all connected clients. Automatic reconnection handling and presence state synchronization.

### Authentication and Security

Secure authentication using Clerk SDK across React, React Native, and Express with role-based access control. Type-safe API design and best-practice security patterns.

### Error Monitoring

Production error tracking and crash reporting powered by Sentry with real-time alerts and issue tracking. Performance monitoring and debugging insights.

### Professional Development Workflow

Feature branch development with pull request reviews and automated code quality checks using CodeRabbit. Clean commit history and collaborative development practices.

---

## Tech Stack

| Category              | Technologies                                      |
| --------------------- | ------------------------------------------------- |
| Mobile                | React Native, TypeScript, Expo                    |
| Web                   | React, TypeScript, Vite                           |
| Backend               | Bun, Express, TypeScript                          |
| Real-Time             | Custom WebSocket Server                           |
| Database              | MongoDB                                           |
| Authentication        | Clerk (React, React Native & Express SDKs)        |
| Error Monitoring      | Sentry                                            |
| Deployment            | Sevalla (API + Web App)                           |
| Developer Tools       | CodeRabbit (PR Reviews), Git, GitHub              |

---

## Getting Started

### Prerequisites

You'll need Node.js (18.x or higher), Bun (1.x or higher), and MongoDB (6.x or higher).

Accounts required:

* Clerk (Authentication)
* Sentry (Error Monitoring)
* Sevalla or preferred hosting provider
* MongoDB Atlas or local MongoDB instance

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

1. Install dependencies:

```bash
# Backend
cd backend
bun install

# Web Application
cd ../web
npm install

# Mobile Application
cd ../mobile
npm install
```

1. Set up environment variables:

```bash
# Copy environment files
cp backend/.env.example backend/.env
cp web/.env.example web/.env
cp mobile/.env.example mobile/.env
```

1. Configure your environment files:

**Backend (`backend/.env`)**

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
CLERK_SECRET_KEY=your_clerk_secret_key

# Server
PORT=3000
NODE_ENV=development

# Monitoring
SENTRY_DSN=your_sentry_dsn
```

**Web (`web/.env`)**

```env
# API Configuration
VITE_API_URL=http://localhost:3000
VITE_WS_URL=ws://localhost:3000

# Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Monitoring
VITE_SENTRY_DSN=your_sentry_dsn
```

**Mobile (`mobile/.env`)**

```env
# API Configuration
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_WS_URL=ws://localhost:3000

# Authentication
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

1. Start the development servers:

```bash
# Terminal 1 - Backend
cd backend
bun run dev

# Terminal 2 - Web App
cd web
npm run dev

# Terminal 3 - Mobile App
cd mobile
npm start
```

Open [http://localhost:5173](http://localhost:5173) for web or scan the QR code for mobile.

For system design details and an in-depth case study, visit my portfolio case study page.

![case-study](https://your-portfolio-url.com/case-studies/chat-app)

---

## Architecture Highlights

Custom WebSocket server built from scratch handles all real-time communication without third-party dependencies. Unified REST API serves both mobile and web platforms with consistent data models. TypeScript across the entire stack ensures type safety and better developer experience. MongoDB provides flexible schema design for chat messages and user data. Bun runtime delivers exceptional backend performance with fast startup times. Production deployment on Sevalla with live API and web application. Error monitoring through Sentry catches issues before users report them.

---

## API Documentation

### REST Endpoints

```
POST   /api/auth/login              - User authentication
POST   /api/auth/logout             - User logout
GET    /api/messages/:channelId     - Fetch message history
POST   /api/messages                - Send new message
GET    /api/channels                - Get user channels
POST   /api/channels                - Create new channel
GET    /api/users                   - Get user list
GET    /api/users/:id               - Get user profile
```

### WebSocket Events

```
// Client to Server
connect                             - Establish connection
disconnect                          - Close connection
message:send                        - Send message
typing:start                        - User started typing
typing:stop                         - User stopped typing
presence:update                     - Update online status

// Server to Client
message:receive                     - New message received
message:delivered                   - Message delivered confirmation
typing:indicator                    - Typing status update
presence:change                     - User presence changed
error                               - Error event
```

---

## Development Workflow

Feature branch development with descriptive branch names following the pattern `feature/feature-name` or `fix/bug-description`. Pull requests require code review before merging to main branch with automated CodeRabbit reviews for code quality. Conventional commit messages for clear history and atomic commits for focused changes. Deployment through CI/CD pipeline to Sevalla hosting.

---

## Deployment

The application is deployed on Sevalla with production infrastructure:

* **API Server**: `https://api.your-domain.com`
* **Web Application**: `https://your-domain.com`
* **Mobile App**: Available through app stores (iOS and Android)

Production deployment includes automatic SSL certificates, CDN integration, health monitoring and uptime checks, automated backups, and horizontal scaling capabilities.

---

## Learning Outcomes

This project teaches modern full-stack development skills including building real-time applications from scratch without third-party chat SDKs, understanding WebSocket protocol and implementation, cross-platform development with React and React Native, backend development with Bun and Express, MongoDB schema design and queries, authentication flows with Clerk SDK, error monitoring and debugging in production, professional Git workflow and collaboration, deploying and maintaining production applications, and REST API design patterns.

---

## Inspiration

This project explores how to build real-time communication infrastructure from first principles. Built to understand the fundamentals of WebSocket servers, cross-platform development patterns, and production deployment without relying on managed services for the core messaging functionality.

---

## License

This project is licensed under the MIT License.
