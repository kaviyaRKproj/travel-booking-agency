import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with booking success route', () => {
  render(
    <MemoryRouter initialEntries={['/booking-success']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Payment Successful!/i)).toBeInTheDocument();
});