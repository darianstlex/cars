import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export const Input = ({
  className,
  error,
  type,
  value,
  onChange,
  ...rest
}) => {
  const textarea = type === 'textarea';
  const inputClasses = classNames(
    styles.input,
    {
      [styles.textarea]: textarea,
      [styles.error]: error,
    },
    className
  );
  return (
    <div className={styles.container}>
      {type === 'range' && <span className={styles.range}>{value}</span>}
      {!textarea ? (
        <input {...rest} value={value} type={type} className={inputClasses} onChange={e => onChange(e.target.value)} />
      ) : (
        <textarea {...rest} value={value} className={inputClasses} onChange={e => onChange(e.target.value)} />
      )}
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.oneOf(['text', 'tel', 'password', 'number', 'textarea', 'range']),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  error: '',
  className: null,
};
