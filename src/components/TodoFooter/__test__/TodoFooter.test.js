import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const BrowseFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

//
it('should render the correct length of the incomplete task', () => {
  render(<BrowseFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);

  expect(paragraphElement).toBeInTheDocument();
});

//
it('should render "task" if the length of the incomplete tasks is one', () => {
  render(<BrowseFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);

  expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" if the length of the incomplete tasks is one', () => {
  render(<BrowseFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);

  expect(paragraphElement).toBeVisible();
});

it('should render "task" if the length of the incomplete tasks is one', () => {
  render(<BrowseFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);

  expect(paragraphElement).toContainHTML('p');
});

it('should render "task" if the length of the incomplete tasks is one', () => {
  render(<BrowseFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);

  expect(paragraphElement).toHaveTextContent('1 task left');
});
