import React from 'react';
//import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  cards: { webformatURL, tags },
}) {
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" width="200"/>
    </li>
  );
}

// ImageGalleryItem.propTypes = {};
