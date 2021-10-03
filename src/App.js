import { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import SelectCharater from './Components/SelectCharater';

function App() {
  const [type, settype] = useState('yoda');
  return (
    <div className={`${type}-bg vh-100`}>
      <SelectCharater settype={settype} />
      <Display type={type} />
    </div>
  );
}

export default App;
