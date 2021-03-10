import React from 'react';

const CardSingle = ({ card }) => {
  return (
    <div className='modalCardContainer'>
      <img className='SingleFacedCard' alt={card.name} src={card.card_faces?.[0]?.image_uris ? card.card_faces[0].image_uris.large : card.image_uris.large}/>
    </div>
  )
};

export default CardSingle;