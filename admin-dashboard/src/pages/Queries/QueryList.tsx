// src/pages/Queries/QueryList.tsx
import React, { useEffect, useState } from 'react';
import { fetchQueries } from '../../services/queries.service';
import { NormalizedQuery } from '../../types/query.types';

const QueryList: React.FC = () => {
  const [queries, setQueries] = useState<NormalizedQuery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadQueries = async () => {
      try {
        const data = await fetchQueries();

        // Normalize entries to a shape our UI expects
        const normalized = data.map((q) => ({
          key: q._id ?? q.id ?? Math.random().toString(36).slice(2),
          title: q.title ?? q.subject ?? '(no title)',
          description: q.description ?? q.message ?? '',
        })) as NormalizedQuery[];

        setQueries(normalized);
      } catch (err) {
        setError('Failed to load queries');
      } finally {
        setLoading(false);
      }
    };

    loadQueries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Application Queries</h1>
      <ul>
        {queries.map((query) => (
          <li key={query.key}>
            <h2>{query.title}</h2>
            <p>{query.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryList;
