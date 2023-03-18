import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/404';
import Home from './pages/Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
