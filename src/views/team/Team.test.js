import { render } from '@testing-library/react';
import Team from './Team.js';
import { BrowserRouter } from 'react-router-dom';

test('', async () => {
  const container = render(
    <BrowserRouter>
      <Team match={{ params: { id: 2 } }} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
