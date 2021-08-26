import React from 'react';
//import PropTypes from 'prop-types';

export default function ImageGalleryItem({ onClick,
  cards: { webformatURL, tags },
}) {
  return (
    <li className="ImageGalleryItem" >
      <img src={webformatURL} alt={tags} onClick={onClick} className="ImageGalleryItem-image" width="200"/>
    </li>
  );
}

// ImageGalleryItem.propTypes = {};
