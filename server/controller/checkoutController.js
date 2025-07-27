import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import Article from '../models/Article.js';

export const createCheckoutSession = async (req, res) => {
  const { articleId } = req.body;

  try {
    const article = await Article.findById(articleId);
    if (!article) return res.status(404).json({ error: 'Article not found' });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: article.price,
          product_data: {
            name: article.title,
          },
        },
        quantity: 1,
      }],
      success_url: `${process.env.CLIENT_URL}/insights?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/insights?canceled=true`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('❌ Stripe session error:', error);
    res.status(500).json({ error: 'Checkout failed' });
  }
};
