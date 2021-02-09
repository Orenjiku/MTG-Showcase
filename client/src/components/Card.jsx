import React from 'react';

const Card = ({ card }) => {
  return (
    <div key={card.id}>
      <img src={card.imageUrl} />
    </div>
  )
}

export default Card;