# 🚀 MailPilot AI
> **AI-Powered Recruiter Outreach Email Generator**
> 🌐 **Live Demo:** https://mailpilot-ai-pi.vercel.app/

MailPilot AI is a full-stack MERN application that helps job seekers create professional recruiter outreach messages using AI.

Users can enter a prompt describing their job role, skills, and career goals. The application generates ready-to-use recruiter outreach content, including a professional email, LinkedIn DM, and follow-up email.

---

## ✨ Features

- **🔐 User Authentication:** Secure signup and login functionality.
- **📧 Email Verification:** OTP-based email verification.
- **🤖 AI Email Generation:** Generate personalized recruiter outreach content using AI.
- **📑 Multiple Output Formats:** Get four types of generated content:
  - Email Subject Line
  - Professional Email Body
  - LinkedIn Direct Message (DM)
  - Follow-up Email
- **📋 Copy to Clipboard:** Easily copy generated content with a single click.
- **📜 Generation History:** Save and access previously generated content anytime.
- **📱 Responsive UI:** Clean and responsive interface tailored for all screen sizes.
- **🛡️ Protected Dashboard:** Secure dashboard access strictly for authenticated users.

---

## 🛠️ Tech Stack

### **Frontend**
- **React.js** (Vite)
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **React Hot Toast**
- **Lucide React** & **Heroicons**

### **Backend**
- **Node.js**
- **Express.js**
- **MongoDB** & **Mongoose**
- **JSON Web Token (JWT)**
- **Nodemailer**
- **Groq AI API**

### **Tools & Platforms**
- **Version Control:** Git & GitHub
- **API Testing:** Postman / Thunder Client
- **Deployment:** Vercel (Frontend) / Render (Backend)

---

## 📸 Application Workflow

1. **Create an account** via Signup.
2. **Verify your email** using OTP.
3. **Log in** to your account.
4. Open the **Dashboard**.
5. Enter a **prompt** describing your target job requirements and background.
6. Generate recruiter outreach content using **AI**.
7. **Copy** the generated content with one click.
8. View and manage your previous generations in **History**.

---

## 📂 Project Structure

```text
mailpilot-ai/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── Hooks/
│   │   ├── page/
│   │   ├── utils/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
└── .gitignore
```

---

## ⚙️ Installation & Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/sachin-lkr/mailpilot-ai.git
cd mailpilot-ai
```

### **2. Backend Setup**
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and configure your environment variables:
```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
API_KEY=your_groq_api_key

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

Start the backend server:
```bash
npm run dev
```

### **3. Frontend Setup**
Open another terminal tab or window:
```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder:
```env
VITE_API_URL=http://localhost:8080/api
```

Start the frontend development server:
```bash
npm run dev
```

The application will run at: `http://localhost:5173`

---

## 🔐 Environment Variables Notice

> ⚠️ **Important:** Never commit your `.env` file or expose API keys, database credentials, email passwords, or JWT secrets on GitHub. Always ensure `.env` is included in your `.gitignore` file.

---

## 🎯 Project Goal

The primary goal of **MailPilot AI** is to simplify the recruiter outreach process by helping job seekers create highly professional, personalized messages without writing everything manually. It combines AI-powered content generation with user authentication and saved generation history into one seamless SaaS solution.

---

## 👨‍💻 Developer

**Sachin Kumar**  
*MERN Stack Developer | Full Stack JavaScript Developer*

- **GitHub:** [@sachin-lkr](https://github.com/sachin-lkr)
- **LinkedIn:** [Sachin Kumar](https://linkedin.com)

---

⭐ *If you find this project useful, consider giving it a star on GitHub!*
