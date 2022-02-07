import { render } from '@testing-library/react';

import ReactSharedLib from './react-shared-lib';

describe('ReactSharedLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSharedLib />);
    expect(baseElement).toBeTruthy();
  });
});
