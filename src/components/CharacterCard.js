import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #e6e2d3;
  margin: 5px;
  padding 5px;
  width: 30%;
  border-radius: 20px;
`;
const Showcase = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CharacterCard = props => {
  return (
    <Card>
      <p>Name: {props.name}</p>
      <p>Status: {props.status}</p>
      <p>species: {props.species}</p>
    </Card>
  );
};
export default CharacterCard;
