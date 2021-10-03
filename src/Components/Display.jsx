import { Fragment, useState } from 'react';
import { useFetch } from '../Utils/CustomHooks';
import DisplayCharacter from './DisplayCharacter';
import InputPhrase from './InputPhrase.jsx';
import OutputPhase from './OutputPhase';
import VoicePhase from './VoicePhase';
import PropTypes from 'prop-types';
import Loader from '../Components/Loading';
import Error from './Error';

const Display = ({ type }) => {
  const [inputText, setinputText] = useState('');
  const { loading, phase, err } = useFetch(`/${type}.json?text=${inputText}`);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : err ? (
        <Error error={err} />
      ) : (
        <div className='d-flex flex-column flex-md-row flex-md-row m-auto mt-5 justify-content-between w-75'>
          <div className='tranlation text-light flex-fill'>
            <div data-testid='TextComponent'>
              <InputPhrase setPhase={setinputText} character={type} />
              {phase?.translated && <OutputPhase phase={phase} />}
            </div>
          </div>
          <div className='d-flex flex-fill flex-column align-items-center m-3 text-center'>
            <DisplayCharacter type={type} />
            <VoicePhase text={phase?.translated} />
          </div>
        </div>
      )}
    </Fragment>
  );
};
Display.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Display;
