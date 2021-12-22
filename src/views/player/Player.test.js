import { render } from '@testing-library/react';
import Player from './Player.js';

test('', () => {
  const container = render(<Player />);
  expect(container).toMatchSnapshot();
});
