const OutputPhase = ({ phase }) => {
  if (!phase) return null;
  return (
    <div className='text-light mt-5 bg-black text-center output '>
      <div className=' p-3 '>
        <div className='phase'>{phase.translated}</div>
        <blockquote>--{phase.translation}</blockquote>
      </div>
    </div>
  );
};

export default OutputPhase;
