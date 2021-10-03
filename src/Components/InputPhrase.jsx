import { useState } from 'react';

const InputPhrase = ({ setPhase, character }) => {
  const [inputValue, setinputValue] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      setPhase(inputValue);
    }
  };
  return (
    <form id='inputPhase' className='text-center   p-2' onSubmit={onSubmit}>
      <div className='form-group '>
        <label htmlFor='inputPhrase'>Put The Words You Want </label>
        <textarea
          className='form-control'
          id='inputPhrase'
          rows='3'
          value={inputValue}
          placeholder='Enter.....'
          onChange={(e) => setinputValue(e.target.value)}
        ></textarea>
      </div>
      <button type='submit' className={`btn btn-${character} mt-4 p-3`}>
        Convert
      </button>
    </form>
  );
};

export default InputPhrase;
