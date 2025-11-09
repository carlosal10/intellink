// admin-dashboard/src/services/articles.service.ts
import { Article, ArticlePayload } from '../types';

const API_URL = '/api/articles';

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
};

export const fetchArticleById = async (id: string): Promise<Article> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch article');
  }
  return response.json();
};

// Accept ArticlePayload for creation — backend returns the created Article (with id)
export const createArticle = async (payload: ArticlePayload): Promise<Article> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error('Failed to create article');
  }
  return response.json();
};

// Accept ArticlePayload for update; id passed separately
export const updateArticle = async (id: string, payload: ArticlePayload): Promise<Article> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error('Failed to update article');
  }
  return response.json();
};

export const deleteArticle = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete article');
  }
};

// compatibility aliases
export const getArticles = fetchArticles;
export const getArticle = fetchArticleById;
