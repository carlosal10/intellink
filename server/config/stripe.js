import Stripe from 'stripe';

const stripe = new Stripe('sk_test_8b6qd_Fkh7hvnBY_2L47by71uHSXDlJ_', {
  apiVersion: '2023-10-16',
});

export default stripe;
// server/config/stripe.js