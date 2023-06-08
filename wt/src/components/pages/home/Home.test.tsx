import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './Home';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<Home />);
    expect(screen.getByText('体重を入力してください。')).toBeInTheDocument();
  });
});
