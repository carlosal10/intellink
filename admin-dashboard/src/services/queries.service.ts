import axios from 'axios';
import { Query } from '../types';

const API_URL = '/api/queries';

export const fetchQueries = async (): Promise<Query[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchQueryById = async (id: string): Promise<Query> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const respondToQuery = async (id: string, responseData: any): Promise<void> => {
  await axios.post(`${API_URL}/${id}/respond`, responseData);
};

export const deleteQuery = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

// 👇 Add this line
export const getQueryDetail = fetchQueryById;
