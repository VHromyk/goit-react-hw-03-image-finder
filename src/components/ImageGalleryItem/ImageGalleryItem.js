import React from 'react';
import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ img, alt }) => (
  <li className="ImageGalleryItem">
    <img src={img} alt={alt} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;
