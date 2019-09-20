import React from 'react';
import Search from './Search';

export default function Header() {
  return (
    <header className='ui centered'>
      <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Charecter</li>
          <li>Location</li>
        </ul>
      </nav>
      <Search />
    </header>
  );
}
