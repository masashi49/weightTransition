import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<Header />);
    expect(screen.getByText('WeightTransition 体重の推移')).toBeInTheDocument();
  });
});
