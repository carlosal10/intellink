import React, { useCallback, useEffect, useState } from 'react';
import { fetchArticles, deleteArticle } from '../../services/articles.service';
import { Article } from '../../types';
import './ArticlesList.css';

const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const loadArticles = async () => {
      try {
        const fetchedArticles = await fetchArticles();
        if (mounted) setArticles(fetchedArticles);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (mounted) setError(`Failed to load articles${msg ? `: ${msg}` : ''}`);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadArticles();
    return () => {
      mounted = false;
    };
  }, []);

  const handleDelete = useCallback(
    async (id: string) => {
      if (!id) {
        setError('Invalid article id.');
        return;
      }

      if (!window.confirm('Delete this article? This cannot be undone.')) return;

      try {
        await deleteArticle(id);
        // functional update to avoid stale state
        setArticles(prev => prev.filter(article => article.id !== id));
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        setError(`Failed to delete article${msg ? `: ${msg}` : ''}`);
      }
    },
    []
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="articles-list">
      <h1>Articles</h1>
      {!articles.length ? (
        <div>No articles yet.</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th style={{ width: 180 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {articles.map(article => {
              // ensure article.id exists (type should guarantee this)
              const id = article.id;
              return (
                <tr key={id}>
                  <td>{article.title}</td>
                  <td>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                    <button onClick={() => (window.location.href = `/articles/edit/${id}`)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ArticlesList;
