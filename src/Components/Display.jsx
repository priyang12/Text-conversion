import { useState } from 'react';
import { useFetch } from '../Utils/CustomHooks';
import InputPhrase from './InputPhrase.jsx';
import OutputPhase from './OutputPhase';
import VoicePhase from './VoicePhase';
import Yoda from '../assets/yoda.png';
import drago from '../assets/drago.png';
import minoin from '../assets/minoin.png';

const Display = ({ type }) => {
  const [inputText, setinputText] = useState('Do or do not. There is no try.');
  const { loading, phase, err } = useFetch(
    `https://api.funtranslations.com/translate/${type}.json?text=${inputText}`
  );

  return (
    <div className='d-flex flex-column flex-md-row flex-md-row m-auto mt-5 justify-content-between w-75'>
      <div className='tranlation text-light flex-fill'>
        {loading ? (
          <div>Loading</div>
        ) : err ? (
          <div>Error</div>
        ) : (
          <div className='div'>
            <InputPhrase setPhase={setinputText} character={type} />
            <OutputPhase phase={phase} />
          </div>
        )}
      </div>
      <div className='d-flex flex-fill flex-column align-items-center m-3 text-center'>
        {type && (
          <div className='voiceimage'>
            {type === 'yoda' ? (
              <img src={Yoda} alt='character' />
            ) : type === 'dothraki' ? (
              <img src={drago} alt='character' />
            ) : (
              <img src={minoin} alt='character' />
            )}
          </div>
        )}
        {loading ? (
          <div>Loading</div>
        ) : err ? (
          <div>Error</div>
        ) : (
          <VoicePhase text={phase?.translated} />
        )}
      </div>
    </div>
  );
};

export default Display;
