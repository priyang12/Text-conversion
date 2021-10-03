import React, { useState } from 'react';
import Yoda from '../assets/yoda.png';
import drago from '../assets/drago.png';
import minoin from '../assets/minoin.png';

const SelectCharater = ({ settype }) => {
  const [charather, setcharather] = useState({
    yoda: true,
    khaldrago: false,
    minion: false,
  });
  const { yoda, khaldrago, minion } = charather;
  const selectYoda = () => {
    setcharather({ yoda: true, khaldrago: false, minion: false });
    settype('yoda');
  };
  const selectKhaldrago = () => {
    setcharather({ yoda: false, khaldrago: true, minion: false });
    settype('dothraki');
  };
  const selectMinion = () => {
    setcharather({ yoda: false, khaldrago: false, minion: true });
    settype('minion');
  };
  return (
    <nav
      className='nav justify-content-around  align-items-center  text-light '
      data-testid='selectCharacter'
    >
      <h1 className='display '>SELECT CHARACTER</h1>
      <div className='charaters d-flex flex-column flex-sm-row'>
        <div
          className={`Navimg mx-4 text-center ${yoda && 'yoda'}  `}
          onClick={selectYoda}
        >
          <img src={Yoda} alt='YODA-IMG' />
          <h1>YODA</h1>
        </div>
        <div
          className={`Navimg mx-4 text-center ${khaldrago && 'khaldrago'}  `}
          onClick={selectKhaldrago}
        >
          <img src={drago} alt='KhalDrago-IMG' />
          <h1>KHALDRAGO</h1>
        </div>
        <div
          className={`Navimg mx-4 text-center ${minion && 'minion'} `}
          onClick={selectMinion}
        >
          <img src={minoin} alt='Minion-IMG' />
          <h1>MINION</h1>
        </div>
      </div>
    </nav>
  );
};

export default SelectCharater;
