import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Back from '../Back';
import { DetailWrapper, Wrapper } from '../GlobalStyles';
import Loader from '../Loader';
import { stringFix } from '../util';

const SongDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [songInfo, setSongInfo] = useState([]);

  // array to filter out useless info
  const uselessInfo = ['trackName', 'artistName', '_id', 'id', '__v'];

  useEffect(() => {
    fetch(`https://project-mongo-api-h6oeu2xskq-uc.a.run.app/songs/id/${id}`)
      .then((res) => res.json())
      .then((data) => setSongInfo(data.body))
      .finally(() => setLoading(false));
  }, [id]);

  if (songInfo.message === 'Invalid id') {
    return <Wrapper>That song does not exist</Wrapper>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <DetailWrapper>
      <Back />
      <h1>{songInfo.trackName}</h1>
      <h2>{songInfo.artistName}</h2>
      <ul>
        {Object.entries(songInfo).map((info) => {
          const [key, value] = info;
          if (uselessInfo.some((u) => u === key)) {
            return null;
          }
          return (
            <li key={key}>
              {stringFix(key)}: {stringFix(value)}
            </li>
          );
        })}
      </ul>
    </DetailWrapper>
  );
};

export default SongDetails;
