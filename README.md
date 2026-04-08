# Smart-Feedback Backend API

## Features
- Submit feedback with auto sentiment analysis (Positive/Negative/Neutral)
- View all feedback
- MongoDB + Express + CORS for https://smart-feedback-client.vercel.app

## Quick Start (Local)

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```
2. Add your MongoDB URI to `.env` (free: https://mongodb.com/atlas)
3. Install & Run:
   ```bash
   npm install
   npm start
   ```
   Server: http://localhost:5000

**API Endpoints:**
- `GET /` - Landing page UI
- `POST /api/feedback` - `{ \"content\": \"text\", \"rating\": 5 }` → auto sentiment
- `GET /api/feedback` - List all

## Deploy Backend (Render.com - Fix CORS)
1. Push code to GitHub
2. render.com > New Web Service > GitHub repo (or existing https://smart-feedback-arxx.onrender.com)
3. **Build:** `npm install`
4. **Start:** `node server.js`
5. **Environment Variables:**
   - `MONGO_URI=your_mongodb_connection_string`
   - `CORS_ORIGIN=https://smart-feedback-client.vercel.app`
6. Save → Automatic Deploy

**CORS Fix:** The `CORS_ORIGIN` env var enables cross-origin requests from Vercel frontend. Redeploy after adding.

## Connect Frontend
Update client to use backend URL: https://smart-feedback-arxx.onrender.com

## Local Dev
Supports `http://localhost:3000` too via CORS.

