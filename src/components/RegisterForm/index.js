import React, { useState } from 'react';
import { Input } from '../Input';

import styles from './index.module.scss';

export const RegisterForm = () => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [date, setDate] = useState({ value: '', error: '' });
  const [color, setColor] = useState({ value: '', error: '' });
  const [range, setRange] = useState({ value: '50000', error: '' });

  const submit = (event) => {
    event.preventDefault();
    // Here just for simplicity I am using just one validation
    // also we can use here validation libraries, or validate against RegExp
    // for better dev experience I would recommend react-hook-form
    if (!name.value) setName({ ...name, error: 'Name is required'});
    if (!email.value) setEmail({ ...email, error: 'Email is required'});
    if (!date.value) setDate({ ...date, error: 'Date is required'});
    if (!color.value) setColor({ ...color, error: 'Color is required'});
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input
        value={name.value}
        type="text"
        placeholder="Enter your name"
        onChange={value => setName({ ...name, value })}
        error={name.error}
      />
      <Input
        value={email.value}
        type="text"
        placeholder="Enter your email"
        onChange={value => setEmail({ ...email, value })}
        error={email.error}
      />
      <Input
        value={date.value}
        type="text"
        placeholder="Enter your DOB"
        onChange={value => setDate({ ...date, value })}
        error={date.error}
      />
      <Input
        value={color.value}
        type="text"
        placeholder="Enter your favorite color"
        onChange={value => setColor({ ...color, value })}
        error={color.error}
      />
      <Input
        min="1000"
        max="100000"
        value={range.value}
        type="range"
        placeholder="Provide your salary"
        onChange={value => setRange({ ...range, value })}
        error={range.error}
      />
      <button>Submit</button>
    </form>
  )
}
