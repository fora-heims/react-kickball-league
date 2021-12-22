import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Player from './Player.js';

test.skip('', () => {
  const container = render(
    <BrowserRouter>
      <Player props={{ match: { params: { id: 1 } } }} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
