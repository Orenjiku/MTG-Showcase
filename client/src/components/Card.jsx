import React from 'react';

const Card = ({ card }) => {
  return (
    <div className='card'>
      <img className='cardImage' src={card.card_faces ? card.card_faces[0].image_uris.normal : card.image_uris.normal} />
    </div>
  )
}

export default Card;