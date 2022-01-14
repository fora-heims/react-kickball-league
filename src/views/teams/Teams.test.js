import { render } from '@testing-library/react';
import Teams from './Teams.js';

test('', () => {
  const container = render(<Teams />);
  expect(container).toMatchSnapshot();
});
