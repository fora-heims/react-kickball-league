import { render } from '@testing-library/react';
import Players from './Players.js';

test('', () => {
  const container = render(<Players />);
  expect(container).toMatchSnapshot();
});
