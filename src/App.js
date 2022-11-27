import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Songs from './components/Songs/Songs';
import SongDetails from './components/Songs/SongDetails';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/Movies/MovieDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/id/:id" element={<SongDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/id/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
