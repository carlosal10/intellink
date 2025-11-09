export interface Query {
  _id?: string;
  id?: string;
  title?: string;
  subject?: string;
  description?: string;
  message?: string;
}

export interface NormalizedQuery {
  key: string;
  title: string;
  description: string;
}