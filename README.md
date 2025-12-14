# Sarra App - Système Habilis CCF Generator

## 📋 Overview

Sarra App is a full-stack web application designed to create **Cahier de Charge Fonctionnelle (CCF)** - Functional Specification Documents - for Habilis automation systems. This platform helps clients and students generate comprehensive functional specifications for industrial automation systems, including mixers (malaxeurs), control panels (pupitres), and power cabinets (armoires de puissance).

The application features an interactive interface for creating specifications through various analysis methods (FAST diagrams, SADT analysis, functional analysis) and automatically generates professional PDF documents that can be sent via email.

## 🛠️ Technologies Used

### Frontend
- **React 18.3.1** - JavaScript library for building user interfaces
- **Vite 6.0.0** - Fast build tool and development server
- **React Router 7.0.1** - Client-side routing
- **@react-pdf/renderer 4.1.5** - PDF document generation
- **ApexCharts & React-ApexCharts** - Interactive data visualization
- **@xyflow/react 12.3.5** - Flow diagrams and node-based editors
- **react-d3-tree 3.6.2** - Tree diagrams visualization
- **React Icons 5.3.0** - Icon library
- **ESLint** - Code linting and quality assurance
- **CSS3** - Custom styling

### Backend
- **Node.js** - JavaScript runtime environment
- **Express 4.21.2** - Web application framework
- **Nodemailer 6.9.16** - Email sending functionality
- **CORS 2.8.5** - Cross-origin resource sharing
- **Body-parser 1.20.3** - Request body parsing
- **Nodemon 3.1.9** - Development server with auto-reload
- **@dotenvx/dotenvx 1.31.3** - Environment variable management

### Development Tools
- **Babel** - JavaScript transpiler
- **ESLint** - Code quality and style checking

## 🎯 What Does This Application Do?

The Sarra App enables users to:

1. **User Authentication**: 
   - Login as a Client or Student (Étudiant)
   - Role-based access control (students can view but not generate documents)

2. **System Presentation**:
   - Explore Habilis system components (Armoire de Puissance, Malaxeur, Pupitre)
   - Interactive documentation and visual representations

3. **Functional Specification Creation**:
   - **Introduction** - Project context and overview
   - **Functional Analysis** - Define system functions and requirements
   - **FAST Diagram** - Functional Analysis Systematic Technique diagrams
   - **Information Chain** - Data flow and information processing
   - **SADT Analysis** - Structured Analysis and Design Technique

4. **PDF Generation**:
   - Generate professional PDF documents from specifications
   - Customizable document templates
   - Automatic formatting and organization

5. **Email Distribution**:
   - Send generated PDFs directly via email
   - Automated email notifications with order confirmations

## 📦 Installation

### Prerequisites
- **Node.js** (version 16 or higher recommended)
- **npm** (comes with Node.js)
- **Gmail account** (for email functionality)

### Setup Instructions

1. **Clone the repository**:
```bash
git clone https://github.com/Mahdyy04/sarra_app.git
cd sarra_app
```

2. **Install Backend Dependencies**:
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**:
```bash
cd ../client
npm install
```

4. **Configure Environment Variables**:

Create a `.env` file in the `backend` directory:

```env
PASSWORD=your_gmail_app_password
```

**Note**: You need to generate an App Password from your Gmail account settings:
- Go to Google Account Settings → Security
- Enable 2-Step Verification
- Generate an App Password for "Mail"
- Use that password in the `.env` file

## 🚀 How to Run

### Development Mode

You need to run both the backend and frontend servers simultaneously.

**Terminal 1 - Backend Server**:
```bash
cd backend
npm start
```
The backend server will run on `http://localhost:5000`

**Terminal 2 - Frontend Development Server**:
```bash
cd client
npm run dev
```
The frontend will run on `http://localhost:5173` (default Vite port)

### Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

You will see the login choice page where you can select to login as:
- **Client** - Full access to create and generate documents
- **Étudiant (Student)** - View-only access to explore the system

## 📝 Additional Scripts

### Frontend

- **Build for production**:
  ```bash
  cd client
  npm run build
  ```

- **Preview production build**:
  ```bash
  npm run preview
  ```

- **Lint code**:
  ```bash
  npm run lint
  ```

### Backend

- **Start with Nodemon** (auto-restart on changes):
  ```bash
  cd backend
  npm start
  ```

## 🏗️ Project Structure

```
sarra_app/
├── backend/
│   ├── server.js           # Express server and email API
│   ├── package.json        # Backend dependencies
│   ├── routes/             # API routes
│   └── .env               # Environment variables (create this)
│
├── client/
│   ├── src/
│   │   ├── main.jsx        # Application entry point
│   │   ├── App.jsx         # Root component
│   │   ├── pages/          # Page components
│   │   │   ├── login/      # Login pages
│   │   │   └── content/    # Content pages (analysis, diagrams)
│   │   ├── components/     # Reusable components
│   │   ├── services/       # API services
│   │   ├── utils/          # Utility functions
│   │   ├── data/           # Static data
│   │   └── assets/         # Images, styles, etc.
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Frontend dependencies
│
└── README.md               # This file
```

## 🔧 Configuration

### Email Service

The application uses Gmail SMTP for sending emails. The sender email is configured in `backend/server.js`:
```javascript
user: "hachemmeddeb89@gmail.com"
```

To use your own email, modify this value and update the `.env` file with your app password.

### API Endpoints

- `GET /` - Health check endpoint
- `POST /send-pdf` - Send generated PDF via email
  - Body: `{ email, pdfData, filename }`

## 🌐 Deployment

The project includes a `vercel.json` configuration file in the client directory, suggesting it's configured for deployment on Vercel.

## 📄 License

ISC

## 🤝 Contributing

This appears to be an educational project. For contributions or questions, please contact the repository owner.

## 📧 Contact

For more information or support, please reach out through the contact page in the application or visit the repository on GitHub.

---

**Project Title**: Cahier de Charge - Système Habilis
**Repository**: [Mahdyy04/sarra_app](https://github.com/Mahdyy04/sarra_app)
