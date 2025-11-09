import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  content: String,
  isPremium: { type: Boolean, default: false },
  price: Number, // in cents
  fileUrl: String,
  downloads: { type: Number, default: 0 }
});

export default mongoose.model('Article', articleSchema);
