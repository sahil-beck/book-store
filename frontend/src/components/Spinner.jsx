import React from 'react';

const Spinner = () => {
  return (
    <div className='flex grow justify-center items-center'>
      <div className='animate-ping h-[10vh] w-[10vh] z-10 rounded-full bg-sky-600' />
    </div>
  )
}

export default Spinner;