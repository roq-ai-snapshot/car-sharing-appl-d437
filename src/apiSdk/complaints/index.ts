import queryString from 'query-string';
import { ComplaintInterface, ComplaintGetQueryInterface } from 'interfaces/complaint';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getComplaints = async (
  query?: ComplaintGetQueryInterface,
): Promise<PaginatedInterface<ComplaintInterface>> => {
  return fetcher('/api/complaints', {}, query);
};

export const createComplaint = async (complaint: ComplaintInterface) => {
  return fetcher('/api/complaints', { method: 'POST', body: JSON.stringify(complaint) });
};

export const updateComplaintById = async (id: string, complaint: ComplaintInterface) => {
  return fetcher(`/api/complaints/${id}`, { method: 'PUT', body: JSON.stringify(complaint) });
};

export const getComplaintById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/complaints/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteComplaintById = async (id: string) => {
  return fetcher(`/api/complaints/${id}`, { method: 'DELETE' });
};
