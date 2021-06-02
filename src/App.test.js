import { render, screen } from '@testing-library/react';
import App from './App';
import Product from './components/Product';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders a Product', () => {
  render (<Product />);
  const productName = screen.getByText(/product name/i);
  const description = screen.getByText(/description/i);
  const price = screen.getByText(/price/i);
  expect(productName).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(price).toBeInTheDocument();
});