import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import LoggedInNavbar from './components/LoggedInNavbar';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './components/ForgotPassword';
import Order from './pages/Order';

function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <AuthProvider>
        {currentUser ? <LoggedInNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute currentUser>
                <Home currentUser />
              </ProtectedRoute>
            }
          />
          <Route path="/order" element={<Order />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
