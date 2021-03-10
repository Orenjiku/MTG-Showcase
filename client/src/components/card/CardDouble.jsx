import React from 'react';

const CardDouble = ({ card }) => {
  return (
    <div className='modalCardContainer'>
      <img className='DoubleFacedCard' alt={card.name} src={card.card_faces[0].image_uris.large} />
      <img className='DoubleFacedCard' src={card.card_faces[1].image_uris.large} />
    </div>
  );
};

export default CardDouble;