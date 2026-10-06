import { Analytics } from '@vercel/analytics/react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <Analytics />
    </AuthProvider>
  );
}

export default App;
