import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Songs from './components/Songs';
import SongDetails from './components/SongDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/id/:id" element={<SongDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
