# Digital Growth Agency Website

A modern website for a digital growth agency built with React, TypeScript, and MongoDB.

## Features

- Modern, responsive design
- Contact form with MongoDB integration
- Admin dashboard for managing submissions
- Service showcase
- Portfolio display
- About section
- Mobile-friendly navigation

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - Shadcn UI
  - React Router

- Backend:
  - Node.js
  - Express
  - MongoDB
  - TypeScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/digital-growth-agency-web.git
cd digital-growth-agency-web
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_atlas_uri
MONGODB_DB=hustle_executive
PORT=3001
```

4. Start the development servers:

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Admin Access

- URL: `/admin`
- Username: `admin`
- Password: `admin123`

## Deployment

The application is configured for deployment on Vercel (frontend) and Render (backend).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
