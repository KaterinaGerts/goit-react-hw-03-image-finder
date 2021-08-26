import React from 'react';
// import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import s from './ImageGallery.module.css';


function ImageGallery({cards, onClick, onImageClick}) {
  
      return (
        <div>
          <ul className={s.ImageGallery}>
            {cards.map(({id, webformatURL, tags, largeImageURL}) => {
              return <ImageGalleryItem key={id} cards={{id, webformatURL, tags}} onClick={() => onImageClick(largeImageURL)}/>;
            })}
          </ul>
          <Button onClick={onClick} />
        </div>    
  )
}



export default ImageGallery;
