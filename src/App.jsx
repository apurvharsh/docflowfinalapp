import { SpeedInsights } from '@vercel/speed-insights/react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <SpeedInsights />
    </AuthProvider>
  );
}

export default App;
