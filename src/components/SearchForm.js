import React, { useState } from 'react';

export default function SearchForm() {
  return (
    <section className='search-form'>
      <div class='search-container'>
        <form>
          <input type='text' placeholder='Search..' name='search' />
        </form>
        <button type='submit'>Search</button>
      </div>
    </section>
  );
}
