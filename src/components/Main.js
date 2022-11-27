import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './GlobalStyles';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrapper>
      <Link to="/songs">GET /songs</Link>
      <Link to="/movies">GET /movies</Link>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled(Wrapper)`
  a {
    font-size: 40px;
    padding: 10px;
  }
`;
