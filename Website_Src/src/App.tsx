import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ArchivePage } from './pages/ArchivePage';
import { DonationsPage } from './pages/DonationsPage';
import { DissidentsPage } from './pages/DissidentsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/donate" element={<DonationsPage />} />
        <Route path="/dissidents" element={<DissidentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
