import React from 'react';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className='ui centered'>
      <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      <a class='active' href='#home'>
        Home
      </a>
      <a href='#about'>About</a>
      <a href='#contact'>Contact</a>
      <SearchForm />
    </header>
  );
}
