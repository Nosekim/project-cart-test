import React from 'react';
import styles from './styles.module.css';

interface Props {
  increment: () => void;
  decrement: () => void;
  addToCart: () => void;
  qty: number;
}

const QuantitySelector: React.FC<Props> = ({ increment, decrement, qty }) => {
  return (
    <div className={styles.container} >
      <div>
        <button className={styles.button} onClick={decrement}>-</button>
      </div>
      <div className={styles.qtyContainer}>{qty}</div>
      <div>
        <button className={styles.button} onClick={increment}>+</button>
      </div>
    </div>
  )
};

export default QuantitySelector;