import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './CharacterCard';

export default function LocationsList() {
  const [place, setplace] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        setplace(res.data.results);
        console.log('location', res.data.results);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);
  return (
    <div className='location-card'>
      {place.map(ele => {
        return (
          <LocationCard
            key={ele.id}
            name={ele.name}
            type={ele.type}
            dimension={ele.dimension}
          />
        );
      })}
    </div>
  );
}
