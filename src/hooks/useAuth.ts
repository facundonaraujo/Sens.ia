export const useAuth = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };

  return { handleLogout };
};