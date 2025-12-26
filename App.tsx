import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Login from './pages/admin/Login';
import Admin from './pages/admin/Admin';
import ProjectForm from './pages/admin/ProjectForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Admin routes without Navbar/Footer */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/project/:id" element={<ProjectForm />} />

        {/* Public routes with Navbar/Footer */}
        <Route path="/*" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:slug" element={<ProjectDetail />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
