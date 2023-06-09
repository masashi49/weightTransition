import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InputWeightData } from './InputWeightData';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<InputWeightData />);
    expect(screen.getByText('今日の日付')).toBeInTheDocument();
  });
});
