const Error = ({ error }) => {
  if (!error) return null;
  return (
    <div className='display-1 text-light m-5 p-5 bg-black Error'>
      {error?.message || 'Sorry Server Error Try Later'}
    </div>
  );
};

export default Error;
