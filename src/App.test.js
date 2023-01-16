import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
});


  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  // test('renders a snapshot', () => {
  //   const tree = renderer.create(<App/>).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
