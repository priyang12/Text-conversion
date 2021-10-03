import Display from '../Components/Display';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
  act,
} from '@testing-library/react';
import axiosMock from 'axios';

describe('Display Test', () => {
  it('Check for init', async () => {
    await act(async () => {
      axiosMock.get.mockResolvedValue({
        data: {
          contents: {
            translated: 'Lost a planet,  master obiwan has.',
            text: 'Master Obiwan has lost a planet.',
            translation: 'drago',
          },
        },
      });
      render(<Display type='yoda' />);
    });

    screen.debug();
    // await waitFor(() => screen.getByTestId('Loading'));
    // await waitForElementToBeRemoved(screen.getByTestId('Loading'));
  });
});
