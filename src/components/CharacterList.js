import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [char, setchar] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setchar(res.data.results);
        console.log(res.data.results);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  return (
    <div className='char-card'>
      {char.map(ele => {
        return (
          <CharacterCard
            key={ele.id}
            name={ele.name}
            status={ele.status}
            species={ele.species}
          />
        );
      })}
    </div>
  );
};
export default CharacterList;
