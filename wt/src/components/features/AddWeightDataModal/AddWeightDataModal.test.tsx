import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
const { axe, toHaveNoViolations } = require('jest-axe');

import { AddWeightDataModal } from './AddWeightDataModal';

describe('Rendering', () => {
  it('Should render hello text', async () => {
    const containder = render(
      <AddWeightDataModal isOpen={false} weightAdd={() => console.log(1)} />
    );
    const accessigbleAxeObject = await axe(containder);
    expect(accessigbleAxeObject).toHabeNoVioLations();
  });
});
