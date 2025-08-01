import express from 'express';
import Stripe from 'stripe';
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('https://intellink-8w9t.onrender.com/create-checkout-session', async (req, res) => {
  try {
    const { articleId, price } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Insight Article #${articleId + 1}`,
          },
          unit_amount: price,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/insights?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/insights?canceled=true`,
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: 'Stripe session creation failed' });
  }
});

export default router;
