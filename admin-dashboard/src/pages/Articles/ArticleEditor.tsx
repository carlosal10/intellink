import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticle, createArticle, updateArticle } from '../../services/articles.service';
import RichTextEditor from '../../components/Editor/RichTextEditor';

interface ArticlePayload {
  title: string;
  content: string;
}

const ArticleEditor: React.FC = () => {
  const { id } = useParams<{ id?: string }>();         // id may be undefined
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing && id) {
      getArticle(id)
        .then(article => {
          // normalize possibly-undefined fields to string before setState
          setTitle(article.title ?? '');
          setContent(article.content ?? '');
          setIsLoading(false);
        })
        .catch(() => {
          navigate('/articles');
        });
    } else {
      setIsLoading(false);
    }
    // id and navigate are stable enough here
  }, [id, isEditing, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const articleData: ArticlePayload = { title, content };

      try {
      if (isEditing) {
        // `id` is definitely defined when isEditing === true because of the guard above,
        // but narrow again for the compiler
        if (!id) throw new Error('Missing article id');
        await updateArticle(id, articleData);
      } else {
        await createArticle(articleData);
      }
      navigate('/articles');
    } catch (error) {
      // TODO: show user-friendly error
      console.error(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{isEditing ? 'Edit Article' : 'Create Article'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Content</label>
          {/* use the prop name your RichTextEditor expects */}
          <RichTextEditor initialContent={content} onChange={setContent} />
        </div>

        <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default ArticleEditor;
