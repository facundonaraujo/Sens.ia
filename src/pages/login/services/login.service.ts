import httpClient from '@services/httpClient';
import type { LoginResponse } from '@/types/auth';

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const { data } = await httpClient.post<LoginResponse>('/auth/login', { email, password });
  return data;
};
