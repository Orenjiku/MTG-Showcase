import React from 'react';

const Card = ({ card }) => {
  return (
    <div>
      <img src={card.card_faces ? card.card_faces[0].image_uris.small : card.image_uris.small} />
    </div>
  )
}

export default Card;