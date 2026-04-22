import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AIResumePage } from './pages/AIResumePage';
import { TrendsPage } from './pages/TrendsPage';
import { Navigation } from './components/Navigation';
import { OrbitalBackground } from './components/OrbitalBackground';

export default function App() {
  return (
    <Router>
      <OrbitalBackground />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<AIResumePage />} />
        <Route path="/trends" element={<TrendsPage />} />
      </Routes>
    </Router>
  );
}
