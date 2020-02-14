import React from 'react';
import PlayerCard from './components/PlayerCards';
import {useDarkMode} from './hooks/useDarkMode'

import { Button } from 'reactstrap';

function App() {
  const [darkMode, toggleDark] = useDarkMode();


  return (
    <div>
      <div className='header'>
        <h1>National Womens Soccer Players!</h1>
        <Button data-testid='btn-rendered' color='secondary'
                      onClick={toggleDark}
                      >{darkMode ? 'Light-Mode' : 'Dark-Mode'}
        </Button>
      </div>
      <PlayerCard />
    </div>
  );
}

export default App;
