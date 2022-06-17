import React from 'react';
import { test, describe, expect } from '@jest/globals';
import { render } from '@testing-library/react';

import TaskCounter from '@components/TaskCounter';

describe('TaskCounter should render correct active task count', () => {

  test('If 0 task left, it should be in the plural', () => {
    const { container } = render(<TaskCounter count={0} />);
    expect(container).toMatchSnapshot();
  });

  test('If 1 task left, it should be in the singular', () => {
    const { container } = render(<TaskCounter count={1} />);
    expect(container).toMatchSnapshot();
  });

  test('If 2 task left, it should be in the plural', () => {
    const { container } = render(<TaskCounter count={2} />);
    expect(container).toMatchSnapshot();
  });

  test('If 12 task left, it should be in the plural', () => {
    const { container } = render(<TaskCounter count={12} />);
    expect(container).toMatchSnapshot();
  });

});

