# 💠 VahanSetu: Unified EV Infrastructure Ecosystem 

**VahanSetu** is a high-fidelity, industrial-grade EV charging and logistics ecosystem designed to bridge the gap between electric ambition and infrastructure reality.

## 🚀 The VahanSetu Solution
VahanSetu provides specialized portals for **Drivers**, **Fleet Managers**, and **Charging Point Operators**.

### 🛠️ Key Features
- **Neural Route Intelligence**: OSRM-based routing with corridor geofencing.
- **Adaptive Telemetry**: CO2 savings calculation and battery forensics.
- **CPO Command Center**: Remote hardware management and revenue analytics.
- **VahanPay**: Secure digital wallet for instant charging sessions.
- **Carbon Marketplace**: Trade earned credits for green energy incentives.

---

### 🚀 Getting Started

#### 1. Backend Setup
```bash
cd vahansetu
pip install -r requirements.txt
python app.py
```

#### 2. Frontend Setup
```bash
cd vahansetu/client
npm install
npm run dev
```

---

### ☁️ Deployment (Render)
This project is configured for Render. Use the **Blueprint** option and connect this repository.
- **Build Command**: `./build.sh`
- **Start Command**: `gunicorn app:app`
