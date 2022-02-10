import { render, screen } from '@testing-library/react';
import Header from '../Header';

// Checking for the header props
it('should render the header props according to the text passed to it', () => {
  const { getByTestId } = render(<Header title='My Header' />);
  const header = getByTestId('header');

  expect(header).toBeTruthy();
});

// Another way of writing the test
it('should render the header props according to the text passed to it', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// Another way of writing the test
it('should render the header props according to the text passed to it', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});

// Another way of writing the test
it('should render the header props according to the text passed to it', async () => {
  render(<Header title='My Header' />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
