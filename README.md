
# 🎓 VoteSure – Secure University Voting System

VoteSure is a tamper-proof, real-time digital voting system built to ensure transparency, fairness, and integrity in university elections.

---

## 📌 Project Status

- ✅ Backend (Phases 1–4): Complete
- ⏳ Frontend: In development (Next.js + TailwindCSS)
- 🔐 Current Auth: OTP login via email (Nodemailer)
- 🗳️ Voting: Supports elections, candidates, and secure vote casting
- 🧑‍💻 Phase 5+: Admin dashboard & result analytics coming soon

---

## 🚀 Features

- Secure OTP authentication with JWT token issuance
- Role-based access for Admins and Voters
- Voter eligibility validation using pre-uploaded email lists
- Create, update, and manage elections and candidates
- Encrypted vote casting (one vote per user)
- PostgreSQL with Prisma ORM
- Email delivery via Nodemailer (SMTP)
- Real-time feedback & error handling
- Scalable architecture for multiple elections

---

## 🧱 Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | Next.js + TypeScript (by frontend dev) |
| Backend      | Node.js + Express.js |
| Auth         | JWT, OTP (via Nodemailer) |
| ORM & DB     | Prisma + PostgreSQL |
| Deployment   | GitHub (in progress) |
| Email        | Nodemailer (Gmail SMTP with App Password) |

---

## 📂 Folder Structure

```
VoteSure/
├── prisma/                # Prisma schema and migrations
├── src/
│   ├── config/            # Database + Mailer setup
│   ├── controllers/       # Business logic
│   ├── routes/            # API routes
│   ├── middleware/        # Auth & Role middleware
│   ├── utils/             # Reusable functions (e.g., OTP sender)
│   └── app.js             # Main app entry point
├── .env                   # Environment variables (not tracked)
├── .gitignore             # Ignoring node_modules, .env, etc.
├── README.md              # Project documentation
└── package.json
```

---

## 🔐 Environment Variables

Create a `.env` file like this:

```env
PORT=5000
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/votesure
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> ✅ Use `.env.example` as a guide. Never push `.env` to GitHub!

---

## 🛠️ Getting Started (Backend)

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/votesure.git
cd votesure
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up PostgreSQL

Create a database called `votesure` and configure your `.env` accordingly.

### 4. Push schema to DB

```bash
npx prisma db push
```

(Optionally seed users)

### 5. Start server

```bash
npm run dev
```

The server runs at `http://localhost:5000`.

---

## 📮 API Routes Summary

| Route                   | Method | Description                  |
|-------------------------|--------|------------------------------|
| `/api/auth/send-otp`    | POST   | Sends OTP to email           |
| `/api/auth/verify-otp`  | POST   | Verifies OTP and returns JWT |
| `/api/elections`        | GET    | Lists all elections          |
| `/api/vote/cast`        | POST   | Cast a vote (VOTER only)     |

---

## 👥 Roles

- **VOTER:** Can verify identity and vote in ongoing elections.
- **ADMIN:** Can create/manage elections, candidates, and audit logs.
- **SUPERADMIN (Developer):** Full system control, adds admins.

---

## 📦 Future Roadmap

- ✅ OTP authentication (done)
- ✅ Election & candidate management (done)
- ⏳ Admin dashboard (Next.js)
- 🔒 Voting audit logs
- 📊 Result analytics
- 📱 Mobile UI (Next.js or React Native)

---



## 💻 License

MIT – Free to use and contribute!
