import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '@pages/dashboard';
import Login from '@pages/login';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;