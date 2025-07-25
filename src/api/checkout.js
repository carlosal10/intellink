import stripePromise from '../utils/stripe';

export async function redirectToCheckout(articleId, price) {
  const stripe = await stripePromise;

  const response = await fetch('/api/payment/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ articleId, price }),
  });

  const session = await response.json();

  if (session.id) {
    stripe.redirectToCheckout({ sessionId: session.id });
  } else {
    alert('Failed to create checkout session');
  }
}
