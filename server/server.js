import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import checkoutRoutes from './routes/checkout.js';
import recruitmentRoutes from './routes/recruitment.js'; // Assuming you have a recruitment route
import expertConnectRoutes from "./routes/expertConnect.js";
import marketLinkRoutes from "./routes/marketLink.js"; // Assuming you have a market link route

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/payment', checkoutRoutes);
app.use('/api/recruitment', recruitmentRoutes);
app.use('/api/expert-connect', expertConnectRoutes);
app.use('/api/marketlink', marketLinkRoutes); // Assuming you have a market link route


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
