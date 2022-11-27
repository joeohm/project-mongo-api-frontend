import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './GlobalStyles';
import Loader from './Loader';

const Songs = () => {
  const [loading, setLoading] = useState(true);
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    fetch('https://project-mongo-api-h6oeu2xskq-uc.a.run.app/songs')
      .then((res) => res.json())
      .then((data) => setSongsData(data.body))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(songsData);
  return (
    <Wrapper>
      <ol>
        {songsData.map((song) => {
          return (
            <li>
              <Link to={`/songs/id/${song._id}`}>
                {song.artistName} - {song.trackName}
              </Link>
            </li>
          );
        })}
      </ol>
    </Wrapper>
  );
};

export default Songs;
