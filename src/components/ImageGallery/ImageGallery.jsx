import React from 'react';
// import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';


function ImageGallery({cards, onClick}) {
  
      return (
        <div>
          <ul className="ImageGallery">
            {cards.map(({id, webformatURL, tags}) => {
              return <ImageGalleryItem key={id} cards={{id, webformatURL, tags}} />;
            })}
          </ul>
          <Button onClick={onClick} />
        </div>    
  )
}



export default ImageGallery;
