import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './contexts/searchContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  );
}

export default App;
