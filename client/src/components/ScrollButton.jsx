import React from 'react';

const ScrollButton = ({ scrollToTop }) => {
  return (
    <div className='scrollButtonContainer'>
      <input className='scrollButton' type='button' value='Back to Top' onClick={scrollToTop} />
    </div>
  );
};

export default ScrollButton;