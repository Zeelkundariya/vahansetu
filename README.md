# 💠 VahanSetu | The OS for Indian EV Mobility (v5.0)

**VahanSetu** is a high-fidelity, enterprise-grade EV charging and fleet intelligence ecosystem. Engineered for the future of Indian mobility, it bridges the gap between infrastructure and intelligence through real-time telemetry, predictive neural analytics, and a seamless "Cyber-Navy" glassmorphism aesthetic. It is more than just a dashboard; it's the operational backbone for the next generation of electric logistics.

[![Deployment Status](https://img.shields.io/badge/Render-Live-success?style=flat-square&logo=render)](https://vahansetu.onrender.com)
[![Python](https://img.shields.io/badge/Python-3.10+-blue?style=flat-square&logo=python)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Figma](https://img.shields.io/badge/Figma-Design-F24E1E?style=flat-square&logo=figma)](https://www.figma.com/design/zbiNeKRnL6R5eaDfWEDQIQ/VahanSetu?node-id=2302-634&t=5njzm5PIsglmIPZ8-1)
[![Postman](https://img.shields.io/badge/Postman-API-FF6C37?style=flat-square&logo=postman)](https://documenter.getpostman.com/view/50840741/2sBXqKoKuM)

## 🔗 Project Resources & Links

| Resource | Description | Link |
| :--- | :--- | :--- |
| 🚀 **Live Deployment** | Production-ready application hosted on Render. | [vahansetu.onrender.com](https://vahansetu.onrender.com/) |
| 🎬 **Video Presentation** | Full project walkthrough and feature demonstration. | [Watch on YouTube](https://www.youtube.com/watch?v=I8c9jt1dHHA) |
| 🎨 **Figma Design** | High-fidelity UI/UX design and architecture. | [VahanSetu Design System](https://www.figma.com/design/zbiNeKRnL6R5eaDfWEDQIQ/VahanSetu?node-id=2302-634&t=5njzm5PIsglmIPZ8-1) |
| 📜 **Postman API** | Comprehensive API documentation for integration. | [API Reference](https://documenter.getpostman.com/view/50840741/2sBXqKoKuM) |
| 🛠️ **Local Development** | Local backend development endpoint. | [http://127.0.0.1:5000/](http://127.0.0.1:5000/) |

---

## 🚀 The VahanSetu Solution

VahanSetu provides a unified platform for the three pillars of the EV economy:

### 1. 🚛 Fleet Logistics & Dashboard
- **Battery Forensics**: Real-time monitoring of cell voltages, temperature, and SOC (State of Charge).
- **Health Scores**: AI-driven reliability metrics for every vehicle in the fleet.
- **Neural Route Intelligence**: OSRM-based routing with corridor geofencing and automatic charging stop insertion.

### 2. ⚡ Charging Point Operations (CPO)
- **Vahan Intelligence Engine**: Simulates hardware pings (OCPP) to provide real-time bay availability.
- **Predictive Pricing**: Dynamic cost multipliers based on grid load and time-of-use (ToU) forecasts.
- **Network Uptime**: 99.8% industrial reliability with automatic node decommission protocols.

### 3. 👤 End-User Experience
- **Carbon Marketplace**: Convert charging efficiency into tradeable carbon credits for a greener footprint.
- **V2G Revenue**: Intelligent grid contribution allows vehicles to earn revenue during peak demand.
- **JWT Nexus Security**: Session-isolated authentication with secure cookie persistence and HS256 encryption.

---

## 🛠️ Technical Architecture

### 🛡️ Backend Protocol
- **Core**: Python / Flask (Production-hardened with Gunicorn)
- **Persistence**: SQLite with **WAL (Write-Ahead Logging)** for high-concurrency telemetry updates.
- **Security**: HS256 JWT Authentication, Password Hashing (Werkzeug), and CSRF-safe session tokens.
- **Intelligence**: Background threading for real-time grid simulation and predictive pricing calculations.

### 🎨 Frontend Protocol
- **Core**: React 18 / Vite (Lightning-fast HMR)
- **UI System**: Custom "Cyber-Navy" Glassmorphism design using Vanilla CSS.
- **Visuals**: Lucide Icons for high-fidelity asset representation.
- **Analytics**: Chart.js integration for real-time energy consumption and revenue trends.

---

## 📁 Folder Structure

```text
/
├── vahansetu/               # Core Application Directory
│   ├── client/              # React frontend (Vite)
│   │   ├── src/
│   │   │   ├── components/  # Reusable UI (Cards, Mods, Nav)
│   │   │   ├── pages/       # Fleet, Host, Analytics, Profile
│   │   │   └── context/     # AuthNexus Global State
│   ├── app.py               # Vahan Intelligence Engine (Flask)
│   ├── mailer.py            # Secure Messaging Engine
│   └── stations.db          # Unified Telemetry Database
├── render.yaml              # Infrastructure as Code (Global)
└── build.sh                 # Unified Build Protocol
```

---

## 🔧 Installation & Local Setup

### 1. Unified Environment
We recommend using a virtual environment to isolate VahanSetu's dependencies.

```bash
# Clone the repository
git clone https://github.com/Zeelkundariya/vahansetu.git
cd vahansetu

# Backend Setup
cd vahansetu
pip install -r requirements.txt
python app.py
```

### 2. Client Development
```bash
cd vahansetu/client
npm install
npm run dev
```

The application will be accessible at `http://127.0.0.1:5000` (Flask handles both API and React proxying).

---

## ☁️ Deployment Configuration (Render)

VahanSetu is optimized for one-click deployment on Render.

| Parameter | Configuration |
| :--- | :--- |
| **Service Type** | Web Service |
| **Environment** | Python |
| **Build Command** | `./build.sh` |
| **Start Command** | `gunicorn --chdir vahansetu app:app --bind 0.0.0.0:$PORT` |
| **Health Check** | `/health` |

---

## 🛡️ Security & Performance
- **Environment Isolation**: Uses `python-dotenv` for managing secure keys.
- **Diagnostic API**: Visit `/health` to verify database connectivity and frontend integrity.
- **Emergency Fallback**: The UI includes a safety net that serves high-fidelity demo data if the primary database node is inaccessible.
