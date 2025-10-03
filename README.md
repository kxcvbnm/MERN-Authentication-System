# MERN Authentication System

A full-stack authentication learning project built with the **MERN** stack. It covers user registration, login, logout, password reset, and email verification with an emphasis on secure practices (JWT-based auth and user state management).  
Live demo: **https://mern-auth-5zfv.onrender.com**

---

## ✨ Features

- **User Registration** — Create an account with email & password (with password-strength validation).  
- **Login / Logout** — Authenticate securely using JWT; includes safe logout handling.  
- **Password Reset** — Request a reset link via email and set a new password with token verification.  
- **Email Verification** — Verify email ownership to harden account security.  
- **Responsive UI** — React-based, user-friendly interface.  

---

## 🧰 Tech Stack

- **MongoDB**, **Express.js**, **React**, **Node.js**

---

## 🗂️ Monorepo Structure

``
MERN-Authentication-System/
├─ backend/ # Node.js/Express API, auth logic, email & tokens
├─ frontend/ # React app (UI, forms, protected routes)
├─ package.json # (root) 
└─ README.md
``
