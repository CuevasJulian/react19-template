import { render } from '@testing-library/react';
import App from '../App';
import stg from '@utils/stg';

test('renders learn react link', () => {
  const { getByText } = render(<App />);

  const text = getByText(
    stg('testing_n_and_y', {
      replace: {
        '%n': 'hello',
        '%y': 'world',
      },
    }),
  );

  expect(text).toBeVisible();
});
