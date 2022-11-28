import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Back from '../Back';
import { DetailWrapper, Wrapper } from '../GlobalStyles';
import Loader from '../Loader';
import { stringFix } from '../util';

const MovieDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  // array to filter out useless info
  const uselessInfo = ['show_id', 'description', '_id', 'id', '__v'];

  useEffect(() => {
    fetch(`https://project-mongo-api-h6oeu2xskq-uc.a.run.app/movies/id/${id}`)
      .then((res) => res.json())
      .then((data) => setMovieInfo(data.body))
      .finally(() => setLoading(false));
  }, [id]);

  if (movieInfo.message === 'Invalid id') {
    return <Wrapper>That movie does not exist</Wrapper>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <DetailWrapper>
      <Back />
      <h1>{movieInfo.title}</h1>
      <Description>{movieInfo.description}</Description>
      <ul>
        {Object.entries(movieInfo).map((info) => {
          const [key, value] = info;
          if (uselessInfo.some((u) => u === key)) {
            return null;
          }
          return (
            <li key={key}>
              {stringFix(key)}: {value}
            </li>
          );
        })}
      </ul>
    </DetailWrapper>
  );
};

export default MovieDetails;

const Description = styled.i`
  padding: 40px;
`;
