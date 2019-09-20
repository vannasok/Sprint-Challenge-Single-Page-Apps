import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #e6e2d3;
  margin: 5px;
  padding 5px;
  width: 30%;
  border-radius: 20px;
`;
export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <p>Name: {props.name}</p>
      <p>Type: {props.type}</p>
      <p>Dimension: {props.dimension}</p>
    </Card>
  );
}
