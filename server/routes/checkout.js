import express from 'express';
import { createCheckoutSession } from '../controllers/checkoutController.js';

const router = express.Router();

router.post('https://intellink-8w9t.onrender.com/create-checkout-session', createCheckoutSession);

export default router;
