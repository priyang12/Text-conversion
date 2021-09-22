import InputPhrase from '../Components/InputPhrase';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('input Component', () => {
  it('check if text area is changing onchaneg', () => {
    render(<InputPhrase />);
    const textarea = screen.getByPlaceholderText('Enter.....');
    userEvent.type(textarea, 'New Value');
    expect(textarea.textContent).toMatch(/New Value/);
  });
  it('Submit call funtion should not call on empty Value', () => {
    const setPhase = jest.fn();
    render(<InputPhrase setPhase={setPhase} />);
    const subBtn = screen.getByRole('button');
    userEvent.click(subBtn);
    expect(setPhase).not.toBeCalled();
  });
  it('Submit call funtion should not call on empty Value', () => {
    const setPhase = jest.fn();
    render(<InputPhrase setPhase={setPhase} />);
    const subBtn = screen.getByRole('button');
    const textarea = screen.getByPlaceholderText('Enter.....');
    userEvent.type(textarea, 'New Value');
    userEvent.click(subBtn);
    expect(setPhase).toBeCalled();
  });
});
