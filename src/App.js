import React from 'react';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import { Route } from 'react-router-dom';
import CharacterList from './components/CharacterList.js';
import LocationLists from './components/LocationsList';

export default function App() {
  return (
    <main>
      <Route exact path='/' component={Header} />

      <Route exact path='/' component={WelcomePage} />
      <h3>Character Info:</h3>
      <CharacterList />

      <Route exact path='/charectors' component={CharacterList} />
      <Route exact path='/location' component={LocationLists} />
    </main>
  );
}
