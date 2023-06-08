import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { About } from './About';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<About />);
    expect(screen.getByText('アバウトページ')).toBeInTheDocument();
  });
});
