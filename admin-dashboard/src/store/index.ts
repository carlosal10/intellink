// admin-dashboard/src/store/index.ts
import { createStore } from 'redux';
import {
  Article,
  Query,
  User,
  Settings,
  RootState,
} from '../types';

/* Initial state */
const initialState: RootState = {
  articles: [],
  queries: [],
  users: [],
  settings: {},
};

/* Action type constants */
export const ADD_ARTICLE = 'ADD_ARTICLE' as const;
export const DELETE_ARTICLE = 'DELETE_ARTICLE' as const;
export const ADD_QUERY = 'ADD_QUERY' as const;
export const DELETE_QUERY = 'DELETE_QUERY' as const;
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS' as const;

/* Action creators (typed) */
export const addArticle = (article: Article) => ({
  type: ADD_ARTICLE,
  payload: article,
});
export const deleteArticle = (id: string) => ({
  type: DELETE_ARTICLE,
  payload: id,
});
export const addQuery = (query: Query) => ({
  type: ADD_QUERY,
  payload: query,
});
export const deleteQuery = (id: string) => ({
  type: DELETE_QUERY,
  payload: id,
});
export const updateSettings = (settings: Partial<Settings>) => ({
  type: UPDATE_SETTINGS,
  payload: settings,
});

/* Discriminated union of action types */
type AddArticleAction = ReturnType<typeof addArticle>;
type DeleteArticleAction = ReturnType<typeof deleteArticle>;
type AddQueryAction = ReturnType<typeof addQuery>;
type DeleteQueryAction = ReturnType<typeof deleteQuery>;
type UpdateSettingsAction = ReturnType<typeof updateSettings>;

export type RootAction =
  | AddArticleAction
  | DeleteArticleAction
  | AddQueryAction
  | DeleteQueryAction
  | UpdateSettingsAction;

/* Reducer */
const rootReducer = (state: RootState = initialState, action: RootAction): RootState => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };

    case DELETE_ARTICLE:
      return { ...state, articles: state.articles.filter(article => article.id !== action.payload) };

    case ADD_QUERY:
      return { ...state, queries: [...state.queries, action.payload] };

    case DELETE_QUERY:
      return { ...state, queries: state.queries.filter(query => query.id !== action.payload) };

    case UPDATE_SETTINGS:
      return { ...state, settings: { ...state.settings, ...action.payload } };

    default:
      return state;
  }
};

/* Create store */
const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export default store;
