// admin-dashboard/src/types/index.ts
export interface Article {
  id: string;
  title: string;
  content: string;
  author?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface ArticlePayload {
  title: string;
  content: string;
}

export interface Query {
  id?: string;           // some APIs use `id`
  _id?: string;          // some APIs use `_id`
  title?: string;        // optional title
  subject?: string;      // optional subject
  description?: string;  // optional description
  message?: string;      // optional message
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface User {
  id: string;
  name: string;
  email?: string;
}

export interface Settings {
  [key: string]: any;
}

/* Root state type */
export interface RootState {
  articles: Article[];
  queries: Query[];
  users: User[];
  settings: Settings;
}
