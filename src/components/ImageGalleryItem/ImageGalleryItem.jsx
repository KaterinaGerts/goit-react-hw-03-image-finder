import React from 'react';
//import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ cards:{id, webformatURL, tags} }) =>     
      (<li className="ImageGalleryItem" key={id}>
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>)
      
       
  

// ImageGalleryItem.propTypes = {};



