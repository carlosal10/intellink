// src/pages/Queries/QueryDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQueryDetail } from '../../services/queries.service';

interface QueryDetailType {
  _id: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
}

const QueryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [queryDetail, setQueryDetail] = useState<QueryDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('No query ID provided.');
      setLoading(false);
      return;
    }

    const fetchQueryDetail = async () => {
      try {
        const data = await getQueryDetail(id);

        // Normalize the API response into our QueryDetailType
        const mapped: QueryDetailType = {
          _id: (data as any)._id ?? (data as any).id ?? id,
          subject: (data as any).subject ?? '',
          message: (data as any).message ?? '',
          status: (data as any).status ?? 'unknown',
          createdAt: (data as any).createdAt ?? new Date().toISOString(),
          updatedAt: (data as any).updatedAt,
        };

        setQueryDetail(mapped);
      } catch (err) {
        console.error('Error fetching query detail:', err);
        setError('Failed to fetch query details.');
      } finally {
        setLoading(false);
      }
    };

    fetchQueryDetail();
  }, [id]);

  if (loading) {
    return <div className="text-gray-500 text-center py-6">Loading query details...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-6">{error}</div>;
  }

  if (!queryDetail) {
    return <div className="text-gray-400 text-center py-6">No query found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow rounded-xl p-6 mt-8">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Query Detail</h1>
      <div className="space-y-3">
        <p>
          <span className="font-medium">Subject:</span> {queryDetail.subject}
        </p>
        <p>
          <span className="font-medium">Message:</span> {queryDetail.message}
        </p>
        <p>
          <span className="font-medium">Status:</span> {queryDetail.status}
        </p>
        <p className="text-sm text-gray-500">
          Submitted on: {new Date(queryDetail.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default QueryDetail;
