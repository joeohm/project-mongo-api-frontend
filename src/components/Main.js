import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './GlobalStyles';

const Main = () => {
  return (
    <Wrapper>
      <Link to="/songs">GET /songs</Link>
    </Wrapper>
  );
};

export default Main;
