import { render, screen } from '@testing-library/react';
import Kanban from './Kanban';

test('renders learn react link', () => {
  render(<Kanban />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
