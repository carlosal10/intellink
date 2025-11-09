// server/controllers/checkoutController.js
import Stripe from 'stripe';
import Article from '../models/Article.js';

// Ensure STRIPE_SECRET_KEY is defined
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('🚨 STRIPE_SECRET_KEY is not set in environment variables.');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10', // Always specify an API version
});

export const createCheckoutSession = async (req, res) => {
  const { articleId } = req.body;

  try {
    if (!articleId) {
      return res.status(400).json({ error: 'Missing articleId in request body' });
    }

    const article = await Article.findById(articleId);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: article.price,
            product_data: {
              name: article.title,
              description: article.summary || 'Insight article',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/insights?success=true&article=${article._id}`,
      cancel_url: `${process.env.CLIENT_URL}/insights?canceled=true`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('❌ Stripe session error:', error.message || error);
    res.status(500).json({ error: 'Checkout failed. Try again later.' });
  }
};
// server/routes/checkout.js