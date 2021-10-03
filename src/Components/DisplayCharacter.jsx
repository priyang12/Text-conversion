import Yoda from '../assets/yoda.png';
import drago from '../assets/drago.png';
import minoin from '../assets/minoin.png';

const DisplayCharacter = ({ type }) => {
  return (
    type && (
      <div className='voiceimage'>
        {type === 'yoda' ? (
          <img src={Yoda} alt='Yoda character' />
        ) : type === 'dothraki' ? (
          <img src={drago} alt='Drago character' />
        ) : (
          <img src={minoin} alt='Minion character' />
        )}
      </div>
    )
  );
};

export default DisplayCharacter;
