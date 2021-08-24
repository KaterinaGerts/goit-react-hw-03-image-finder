import React from 'react';
//import PropTypes from 'prop-types';

export const ImageGalleryItem = ({id, image, alt}) =>     
      (<li className="ImageGalleryItem" key={id}>
        <img src={image} alt={alt} className="ImageGalleryItem-image" />
      </li>)
      
       
  

// ImageGalleryItem.propTypes = {};



