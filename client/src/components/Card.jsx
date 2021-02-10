import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

const Card = ({ card }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <img className='cardImage' src={card.image_uris ? card.image_uris.normal : card.card_faces[0].image_uris.normal} onClick={handleOpen}/>
      <Modal className='cardModalContainer' open={open} onClose={handleClose} aria-labelledby={card.name}>
        <div>
          <img src={card.card_faces ? card.card_faces[0]?.image_uris?.large : card.image_uris.large} onClick={handleClose} />
          <img src={card.card_faces ? card.card_faces[1]?.image_uris?.large : null} onClick={handleClose} />
        </div>
      </Modal>
    </div>
  )
}

export default Card;