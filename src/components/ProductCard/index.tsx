import React, { useState } from 'react';
import { ProductType } from './../../types';
import QuantitySelector from '../QuantitySelector';
import styles from './style.module.css';
import { useMain } from '../../providers/main.provider';

interface Props {
  product: ProductType
}

export default function ProductCard({ product }: Props) {
  const { updateCart } = useMain();
  const { name, imageUrl, price, sellingPrice } = product;
  const priceValue = String(price).split("").slice(0, -2).join("");
  const priceCents = String(price).split("").slice(-2).join("");
  const listPriceValue = String(sellingPrice).split("").slice(0, -2).join("");
  const listPriceCents = String(sellingPrice).split("").slice(-2).join("");

  const [selectQty, setSelectQty] = useState<number>(1);

  function incrementQty(): void {
    setSelectQty(old => old + 1);
  }

  function decrementQty(): void {
    setSelectQty(old => {
      if (old > 1) {
        return old - 1
      }
      return 1;
    });
  }

  function addToCart(): void {
    const productToAdd: ProductType = { ...product, quantityToBuy: selectQty };
    updateCart(productToAdd);
    setSelectQty(1);
  }

  return (
    <div className={styles.cardBox}>
      <div className={styles.cardImage}>
        <img src={imageUrl} className={styles.productImage} />
      </div>
      <div className={styles.productDescription}>
        <div className={styles.productName}>
          {name.toUpperCase()}
        </div>
        <div className={styles.priceBox}>
          <div className={styles.price}>
            {`R$ ${priceValue === "" ? 0 : priceValue},${priceCents}`}
          </div>
          <div className={styles.sellingPrice}>
            {`R$ ${listPriceValue === "" ? 0 : listPriceValue},${listPriceCents}`}
          </div>
        </div>
        <div className={styles.quantityBox}>
          <QuantitySelector increment={incrementQty} decrement={decrementQty} qty={selectQty} addToCart={addToCart} />
          <button className={styles.button} onClick={addToCart}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}
