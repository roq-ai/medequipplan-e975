import axios from 'axios';
import queryString from 'query-string';
import { InnovationInterface, InnovationGetQueryInterface } from 'interfaces/innovation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInnovations = async (
  query?: InnovationGetQueryInterface,
): Promise<PaginatedInterface<InnovationInterface>> => {
  const response = await axios.get('/api/innovations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInnovation = async (innovation: InnovationInterface) => {
  const response = await axios.post('/api/innovations', innovation);
  return response.data;
};

export const updateInnovationById = async (id: string, innovation: InnovationInterface) => {
  const response = await axios.put(`/api/innovations/${id}`, innovation);
  return response.data;
};

export const getInnovationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/innovations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInnovationById = async (id: string) => {
  const response = await axios.delete(`/api/innovations/${id}`);
  return response.data;
};
