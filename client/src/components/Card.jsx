import React from 'react';

const Card = ({ card }) => {
  return (
    <div>
      <img src={card.imageUrl} />
    </div>
  )
}

export default Card;