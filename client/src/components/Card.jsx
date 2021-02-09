import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

const Card = ({ card }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='card'>
      <img className='cardImage' src={card.card_faces ? card.card_faces[0].image_uris.normal : card.image_uris.normal} onClick={handleOpen}/>
      <Modal className='cardModalContainer' open={open} onClose={handleClose} aria-labelledby={card.name}>
          <img src={card.card_faces ? card.card_faces[0].image_uris.large : card.image_uris.large} />
      </Modal>
    </div>
  )
}

export default Card;