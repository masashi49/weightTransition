import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { WeightGraph } from './WeightGraph';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<WeightGraph />);
    expect(screen.getByText('グラフです')).toBeInTheDocument();
  });
});
