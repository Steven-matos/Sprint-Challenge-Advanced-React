import React from 'react';
import {render} from '@testing-library/react';
import PlayerCards from './PlayerCards';

test('cards are rendered', () =>{
    const {getByTestId} = render(<PlayerCards />);
    getByTestId(/rendered/i);
});