# 🔑 Password Manager

A secure **React + Express Password Manager** where you can store, view, copy, edit, and delete your credentials with a responsive interface.

---

## 🚀 Features
- **Add** new passwords with site & username
- **Copy** site, username, or password to clipboard
- **Toggle** password visibility (show/hide)
- **Edit & Delete** stored passwords
- **Responsive UI** (desktop + mobile optimized)
- **Toast notifications** for user feedback
- **Secure storage** with MongoDB

---

## 🛠️ Tech Stack

**Frontend**
- React 19.1.1
- Vite 7.1.2
- TailwindCSS 4.1.12
- React Icons 5.5.0
- React Toastify 11.0.5

**Backend**
- Express 5.1.0
- MongoDB 6.18.0 (Native Driver)
- CORS 2.8.5
- Dotenv 16.4.5

---

## 📦 Prerequisites

- **Node.js** v18.0.0 or higher
- **npm** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas)

---

## ⚡ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone <your-repo-url>
cd "video 130 - Password Manager"
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in `backend/` directory:
```env
MONGO_URI=your-mongodb-connection-string
```

Start backend server:
```bash
npm start
```
**Backend runs at:** `http://localhost:3000`

### 3️⃣ Frontend Setup
```bash
# From project root
npm install
npm run dev
```
**Frontend runs at:** `http://localhost:5173`

---

## 📂 Project Structure

```
video 130 - Password Manager/
├── backend/
│   ├── server.js           # Express server & API routes
│   ├── package.json        # Backend dependencies
│   └── .env               # Environment variables
├── src/
│   ├── components/
│   │   ├── Manager.jsx     # Main password manager component
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── passwordList.jsx # Password list with responsive design
│   │   └── usemedia.jsx    # Media query hook
│   ├── assets/
│   │   ├── Add.jsx         # Add icon component
│   │   ├── Delete.jsx      # Delete icon component
│   │   ├── Edit.jsx        # Edit icon component
│   │   └── logo.jsx        # Logo component
│   ├── App.jsx             # Main app component
│   └── main.jsx            # App entry point
├── public/
│   └── WhiteLock.png       # App icon
├── package.json            # Frontend dependencies
├── vite.config.js          # Vite configuration
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Fetch all passwords |
| `POST` | `/` | Add new password |
| `DELETE` | `/:id` | Delete password by ID |

---

## 🎯 Usage

1. **Add Password:** Fill in site, username, and password fields, then click save
2. **Copy Data:** Click the copy icon next to any field to copy to clipboard
3. **Toggle Visibility:** Click the eye icon to show/hide passwords
4. **Edit:** Click the edit icon to modify existing entries
5. **Delete:** Click the delete icon to remove entries

---

## 📱 Responsive Design

- **Desktop:** Grid layout with all fields visible
- **Mobile:** Stacked layout with labeled fields for better readability
- **Touch-friendly:** Optimized button sizes and spacing

---

## 🔒 Security Notes

- Passwords are stored in MongoDB
- Use HTTPS in production
- Consider adding encryption for sensitive data
- Implement proper authentication for production use

---

## 📄 Environment Variables

Create `.env` file in `backend/` directory:
```env
MONGO_URI=mongodb://localhost:27017/PassManager
# or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/PassManager
```