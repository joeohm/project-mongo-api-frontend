import React from 'react';
import styled from 'styled-components';

const Back = () => {
  return <StyledBack onClick={() => window.history.back()}>Back</StyledBack>;
};

export default Back;

const StyledBack = styled.button`
  align-self: flex-start;
  margin: 20px;
  padding: 10px;
`;
