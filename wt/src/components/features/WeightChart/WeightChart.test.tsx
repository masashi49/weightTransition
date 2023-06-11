import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { WeightChart } from './WeightChart';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<WeightChart />);
    expect(screen.getByText('グラフです')).toBeInTheDocument();
  });
});
