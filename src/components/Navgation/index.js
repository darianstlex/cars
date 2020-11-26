import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

export const Navigation = () => (
  <div className={styles.container}>
    <NavLink to="/">GALLERY</NavLink>
    <NavLink to="/form">REGISTER</NavLink>
  </div>
)
