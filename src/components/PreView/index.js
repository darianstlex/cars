import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export const PreView = ({ isShowing, hide, image }) => {
  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className={styles.overlay} />
      <div className={styles.wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog" >
        <button type="button" className={styles.close} data-dismiss="modal" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className={styles.image} style={{backgroundImage: `url(${image.url})`}} />
      </div>
    </React.Fragment>, document.body
  ) : null;
}

PreView.protoTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
}

export const usePreView = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};
