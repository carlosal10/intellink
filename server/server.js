import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import checkoutRoutes from './routes/checkout.js';
import recruitmentRoutes from './routes/recruitment.js'; // Assuming you have a recruitment route
import expertConnectRoutes from "./routes/expertConnect.js";
import marketLinkRoutes from "./routes/Market-Link.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Serve uploaded files statically under /uploads
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use('/api/payment', checkoutRoutes);
app.use('/api/recruitment', recruitmentRoutes);
app.use('/api/expert-connect', expertConnectRoutes);
app.use('/api/marketlink', marketLinkRoutes); // Assuming you have a market link route

// Serve client build (SPA) and add fallback for client-side routes
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientBuildPath = path.join(__dirname, '../build');

app.use(express.static(clientBuildPath));

app.get('*', (req, res, next) => {
  // Let API and uploads continue to next handlers
  if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) return next();
  return res.sendFile(path.join(clientBuildPath, 'index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
