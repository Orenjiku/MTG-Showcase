import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import CardSingle from './CardSingle.jsx';
import CardDouble from './CardDouble.jsx';
import CardPrice from './CardPrice.jsx';

const Card = ({ card, loading='eager' }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='cardContainer'>
      <img className='card' loading={loading} alt={card.name} src={card.image_uris ? card.image_uris.border_crop : card.card_faces[0].image_uris.border_crop} onClick={handleOpen}/>
      <Modal className='modal' open={open} onClose={handleClose} aria-labelledby={card.name}>
        <div className='modalContainer' onClick={handleClose}>
          <div className='modalInnerContainer'>
            {card.layout === 'modal_dfc' || card.layout === 'transform' ? (
              <CardDouble card={card} />
            ) : (
              <CardSingle card={card} />
            )}
            <CardPrice card={card} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Card;