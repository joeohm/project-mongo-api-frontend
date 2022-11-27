import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Back from '../Back';
import { Wrapper } from '../GlobalStyles';
import Loader from '../Loader';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetch('https://project-mongo-api-h6oeu2xskq-uc.a.run.app/movies')
      .then((res) => res.json())
      .then((data) => setMoviesData(data.body))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Back />
      <h1>Movies</h1>
      <ol>
        {moviesData.map((movie) => {
          return (
            <li>
              <Link to={`/movies/id/${movie._id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ol>
    </Wrapper>
  );
};

export default Movies;
