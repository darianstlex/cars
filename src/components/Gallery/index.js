import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from '../Image';

import styles from './index.module.scss';
import { usePreView, PreView } from '../PreView';

export const Gallery = ({ images }) => {
  const { isShowing, toggle } = usePreView();
  const [image, setImage] = useState(null);
  const showPreview = image => {
    setImage(image);
    toggle();
  }
  return (
    <div className={styles.grid}>
      <PreView isShowing={isShowing} hide={toggle} image={image}/>
      {images.map(image => (
        <div key={image.id}>
          <div className={styles.header}>
            <Image
              className={styles.avatar}
              src={image.user.profile_image}
              alt={image.user.name}
            />
            <span className={styles.text}>{image.alt_description}</span>
          </div>
          <Image
            className={styles.image}
            src={image.url}
            alt={image.alt_description}
            onClick={() => showPreview(image)}
          />
        </div>
      ))}
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}
