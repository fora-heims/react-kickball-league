import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Player from './Player.js';

test('', async () => {
  const container = render(
    <BrowserRouter>
      <Player match={{ params: { id: 1 } }} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
