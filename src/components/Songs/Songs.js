import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Back from '../Back';
import { Wrapper } from '../GlobalStyles';
import Loader from '../Loader';

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

  return (
    <Wrapper>
      <Back />
      <ol>
        {songsData.map((song) => {
          return (
            <li key={song._id}>
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
