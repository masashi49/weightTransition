import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AddWeightDataModal } from './AddWeightDataModal';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(
      <>
        <AddWeightDataModal isOpen={true} weightAdd={() => console.log(1)} />
      </>
    );
    expect(screen.getByText('閉じる')).toBeInTheDocument();
  });
});
