import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const VoicePhase = ({ text }) => {
  const [VoiceIndex, setVoiceIndex] = useState(null);
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();
  const voice = voices[VoiceIndex] || null;
  if (!text) return null;
  if (!supported) {
    return (
      <p className='text-center h5 text-light m-2'>
        Oh no, it looks like your browser doesn&#39;t support Speech Synthesis.
      </p>
    );
  }
  return (
    <div className='Voices w-100'>
      <select
        id='voice'
        name='voice'
        value={VoiceIndex || ''}
        onChange={(e) => setVoiceIndex(e.target.value)}
      >
        <option value=''>Default</option>
        {voices.map((option, index) => (
          <option key={option.voiceURI} value={index}>
            {`${option.lang} - ${option.name}`}
          </option>
        ))}
      </select>
      <br />
      {speaking ? (
        <button type='button' onClick={cancel}>
          Stop
        </button>
      ) : (
        <button type='button' onClick={() => speak({ text, voice })}>
          Speak
        </button>
      )}
    </div>
  );
};

export default VoicePhase;
