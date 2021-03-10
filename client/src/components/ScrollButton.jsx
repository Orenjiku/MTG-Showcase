import React from 'react';

const ScrollButton = ({ scrollToTop, showScrollButton }) => {
  let visibility = showScrollButton ? 'visible' : 'hidden';
  return (
    <div className='scrollButtonContainer'>
      <input className='scrollButton' style={{visibility: visibility}} type='button' value='Back to Top' onClick={scrollToTop} />
    </div>
  );
};

export default ScrollButton;