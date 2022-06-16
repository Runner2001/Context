import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.com';
import PostContextProvider from './context/PostContext';
import FormPage from './pages/Form';
import Home from './pages/Home';

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/add' element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;
