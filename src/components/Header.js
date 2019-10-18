import React from 'react';
import SearchForm from './SearchForm';
import { Link, Route } from 'react-router-dom';

export default function Header() {
  return (
    <header className='ui centered'>
      <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>

      <Link to='/'>Home</Link>
      <Link to='/charecter-list'>Charecter</Link>
      <Link to='/location-list'>Location</Link>

      <SearchForm />
    </header>
  );
}
