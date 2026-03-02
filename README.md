# 🧑💼 Rojgar Setu

**Rojgar Setu** is a full-stack MERN web application that bridges the gap between **clients** and **local service providers**. It simplifies the hiring process by allowing users to browse services, register/login, and book services based on their needs.

---

## 🌐 Live Demo

🔹 **Frontend:** [https://rojgar-setu-murex.vercel.app](https://rojgar-setu-murex.vercel.app)  
🔹 **Backend API:** [https://rojgar-setu-o045.onrender.com](https://rojgar-setu-o045.onrender.com)

### 🔑 Demo Credentials

To test the application, use these credentials:

```
Email: demo@123gmail.com
Password: demo@2026
```

> **Note:** You can also register a new account to explore all features.

---

## ✨ Features

- 🔐 **User Authentication** - Secure JWT-based login/signup system
- 📋 **Service Booking** - Browse and book various local services
- 👤 **User Dashboard** - Manage bookings and profile
- 🎨 **Responsive Design** - Fully mobile-friendly interface
- 🔒 **Protected Routes** - Secure API endpoints with token verification
- 📱 **Modern UI** - Clean and intuitive user experience

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Axios** - HTTP requests
- **Bootstrap** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **dotenv** - Environment variables

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Cloud database

---

## 📂 Project Structure

```
Rojgar-Setu-main/
│
├── clientSide/                    # Frontend Application
│   ├── public/                    # Static assets
│   │   ├── images/                # Image files
│   │   │   ├── img.jpg
│   │   │   ├── new.jpg
│   │   │   ├── xtm.png
│   │   │   └── xtm1.jpeg
│   │   └── vite.svg
│   │
│   ├── src/                       # Source files
│   │   ├── components/            # Reusable React components
│   │   │   ├── About.jsx          # About section
│   │   │   ├── Contact.jsx        # Contact form
│   │   │   ├── Footer.jsx         # Footer component
│   │   │   ├── Header.jsx         # Navigation header
│   │   │   ├── Hero.jsx           # Hero section
│   │   │   ├── ModalForm.jsx      # Booking modal
│   │   │   ├── Privacy.jsx        # Privacy policy
│   │   │   ├── Services.jsx       # Services grid
│   │   │   └── Terms.jsx          # Terms & conditions
│   │   │
│   │   ├── assets/                # Static assets
│   │   │   └── react.svg
│   │   │
│   │   ├── App.jsx                # Main app component with routing
│   │   ├── Book.jsx               # Service booking page
│   │   ├── Home.jsx               # Landing page
│   │   ├── Login.jsx              # User login page
│   │   ├── Signup.jsx             # User registration page
│   │   ├── Home.css               # Global styles
│   │   └── main.jsx               # React entry point
│   │
│   ├── .env                       # Environment variables (VITE_API_URL)
│   ├── .gitignore                 # Git ignore rules
│   ├── eslint.config.js           # ESLint configuration
│   ├── index.html                 # HTML template
│   ├── package.json               # Frontend dependencies
│   ├── package-lock.json          # Locked dependencies
│   ├── vercel.json                # Vercel deployment config
│   └── vite.config.js             # Vite configuration
│
├── server/                        # Backend Application
│   ├── middleware/                # Custom middleware
│   │   └── authMiddleware.js      # JWT token verification
│   │
│   ├── models/                    # MongoDB schemas
│   │   ├── Booking.js             # Booking model
│   │   └── userModel.js           # User model
│   │
│   ├── .env                       # Environment variables (PORT, MONGO_URI, JWT_SECRET)
│   ├── .gitignore                 # Git ignore rules
│   ├── index.js                   # Express server & API routes
│   ├── package.json               # Backend dependencies
│   └── package-lock.json          # Locked dependencies
│
├── .gitignore                     # Root git ignore
└── README.md                      # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jaikumar760/rojgar-setu.git
cd rojgar-setu
```

2. **Setup Backend**
```bash
cd server
npm install
```

Create `.env` file in `server/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:
```bash
npm start
```

3. **Setup Frontend**
```bash
cd clientSide
npm install
```

Create `.env` file in `clientSide/` directory:
```env
VITE_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

4. **Access the application**
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## 📡 API Endpoints

### Authentication
- `POST /register` - Register new user
- `POST /login` - User login (returns JWT token)

### Booking (Protected)
- `POST /api/book-service` - Book a service (requires JWT)
- `GET /api/profile` - Get user profile (requires JWT)

---

## 🔒 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_secret_key
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

---

## 🌟 Key Highlights

- ✅ Full-stack MERN application
- ✅ JWT authentication & authorization
- ✅ RESTful API design
- ✅ MongoDB database integration
- ✅ Responsive mobile-first design
- ✅ Production-ready deployment
- ✅ Environment-based configuration

---

## 📸 Screenshots

### Home Page
Browse available services and learn about the platform.

### Login/Signup
Secure authentication system with JWT tokens.

### Service Booking
Easy-to-use booking form with user details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Jai Kumar**

- GitHub: [@jaikumar760](https://github.com/jaikumar760)
- LinkedIn: [Jai Kumar](https://www.linkedin.com/in/jai-k-bb3861257/)
- Email: jk4729954@gmail.com

---

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Vercel for frontend deployment
- Render for backend deployment
- React community for amazing tools

---

⭐ **If you like this project, please give it a star!** ⭐
