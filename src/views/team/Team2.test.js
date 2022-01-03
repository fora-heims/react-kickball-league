import Team from './Team.js';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

it('should render a teams details', async () => {
  const { container } = render(
    <MemoryRouter>
      <Team match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Stumptown Lumberjacks');
  expect(container).toMatchSnapshot();
});
