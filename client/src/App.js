import React from 'react';
import PlayerCard from './components/PlayerCards';

import { ButtonToggle } from 'reactstrap';

function App() {
  return (
    <div>
      <div className='header'>
        <h1>National Womens Soccer Players!</h1>
        <ButtonToggle color="secondary">Dark-Mode</ButtonToggle>
      </div>
      <PlayerCard />
    </div>
  );
}

export default App;
