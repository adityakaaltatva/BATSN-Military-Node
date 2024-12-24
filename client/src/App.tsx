import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // AuthProvider wrapping router
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Alerts from './pages/Alerts';
import BlockchainLogs from './pages/BlockchainLogs';
import Explorer from './pages/Explorer';

const App = () => {
  return (
    <Router>
      <AuthProvider> {/* AuthProvider inside Router */}
        <div className="min-h-screen bg-gray-900 text-white bg-[url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed">
          <div className="min-h-screen bg-gradient-to-b from-gray-900/90 to-gray-900/70 backdrop-blur-sm">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={
                  <>
                    <Navbar />
                    <Home />
                  </>
                } />
                <Route path="/alerts" element={
                  <>
                    <Navbar />
                    <Alerts />
                  </>
                } />
                <Route path="/blockchain" element={
                  <>
                    <Navbar />
                    <BlockchainLogs />
                  </>
                } />
                <Route path="/explorer" element={
                  <>
                    <Navbar />
                    <Explorer />
                  </>
                } />
              </Route>
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
