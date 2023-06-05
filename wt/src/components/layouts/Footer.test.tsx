import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from './Footer';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<Footer />);
    expect(screen.getByText('@2023 YMDM')).toBeInTheDocument();
  });
});
