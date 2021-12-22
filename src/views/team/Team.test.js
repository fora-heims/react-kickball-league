import { render } from '@testing-library/react';
import Team from './Team.js';
import { BrowserRouter } from 'react-router-dom';

test.skip('', () => {
  const container = render(
    <BrowserRouter>
      <Team />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
