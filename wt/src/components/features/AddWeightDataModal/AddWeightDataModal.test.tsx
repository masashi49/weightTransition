import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AddWeightDataModal } from './AddWeightDataModal';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<AddWeightDataModal />);
    expect(screen.getByText('@2023 YMDM')).toBeInTheDocument();
  });
});
