import SelectCharater from '../Components/SelectCharater';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/react';
import '@testing-library/jest-dom';
import yoda from '../assets/yoda.png';

describe('select character Tests', () => {
  it('check layout Select Char', () => {
    render(<SelectCharater />);
    const selectText = screen.getByText(/Select Character/);
    expect(selectText.innerHTML).toBeInTheDocument;
  });
  it(' Character Images', () => {
    render(<SelectCharater />);
    const YodaImg = screen.getByAltText('YODA-IMG');
    const KhalDragoImg = screen.getByAltText('KhalDrago-IMG');
    const MinionImg = screen.getByAltText('Minion-IMG');

    expect(YodaImg).not.toBeNull();
    expect(KhalDragoImg).not.toBeNull();
    expect(MinionImg).not.toBeNull();
  });
  it('test yoda Image SRC', () => {
    render(<SelectCharater />);
    const YodaImg = screen.getByAltText('YODA-IMG');
    expect(YodaImg.src).toMatch(`${yoda}`);
  });
  it('Change Locale Storage based on select', async () => {
    render(<SelectCharater />);
    const container = screen.getByTestId('selectCharacter');
    const charImages = container.querySelectorAll('.Navimg');
    const yodaChar = charImages[0];
    const khalChar = charImages[1];
    const minionChar = charImages[2];
    userEvent.click(khalChar);
    expect(yodaChar.className).not.toMatch(/yoda/);
    expect(khalChar.className).toMatch(/khaldrago/);
    userEvent.click(minionChar);
    expect(khalChar.className).not.toMatch(/khaldrago/);
    expect(minionChar.className).toMatch(/minion/);
    //Check loacl Storage
    expect(localStorage.getItem('route')).toBe('minion');
  });
});
