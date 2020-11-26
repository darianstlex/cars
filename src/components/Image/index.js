import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';

import styles from './index.module.scss'

export const Image = ({ src, alt, className, onClick }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  const onClickHandler = () => {
    onClick && onClick();
  }

  const imageClass = classNames(styles.image, {
    [styles.clickable]: onClick,
  })

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.placeholder} ref={refPlaceholder} />
      <LazyLoad>
        <img
          className={imageClass}
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
          onClick={onClickHandler}
        />
      </LazyLoad>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
