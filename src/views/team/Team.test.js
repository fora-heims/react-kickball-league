import { render } from '@testing-library/react';
import Team from './Team.js';

test('', () => {
  const container = render(<Team />);
  expect(container).toMatchSnapshot();
});
