import React from 'react';
import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';

import TaskCounter from '@components/TaskCounter';

test('TaskCounter should render correctly', () => {
  const { container } = render(<TaskCounter count={1} />);
  expect(container).toMatchSnapshot();
});
