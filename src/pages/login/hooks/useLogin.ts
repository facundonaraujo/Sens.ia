import { useMutation } from '@tanstack/react-query';
import { login } from '../services/login.service';
import type { LoginResponse } from '@/types/auth';

export const useLogin = () => {
  const { mutate: handleLogin, isPending , error } = useMutation<LoginResponse, Error, { email: string; password: string }>({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.token);
    },
    onError: (error) => {
      console.error('Error al iniciar sesión:', error);
    },
    retry: false,
  });

  return { handleLogin, isLoading: isPending , error };
};
