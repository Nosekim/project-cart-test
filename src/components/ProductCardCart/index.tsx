import React from 'react';
import { IoMdClose } from "react-icons/io";
import { ProductType } from './../../types';
import styles from './style.module.css';
import { useMain } from '../../providers/main.provider';

interface Props {
  product: ProductType
}

export default function ProductCard({ product }: Props) {
  const { removeItemFromCart } = useMain();
  const { name, id, imageUrl, price, sellingPrice, quantityToBuy } = product;
  const priceValue = String(price).split("").slice(0, -2).join("");
  const priceCents = String(price).split("").slice(-2).join("");
  const listPriceValue = String(sellingPrice).split("").slice(0, -2).join("");
  const listPriceCents = String(sellingPrice).split("").slice(-2).join("");

  return (
    <div className={styles.cardBox}>
      <div className={styles.cardImage}>
        <img src={imageUrl} className={styles.productImage} />
      </div>
      <div className={styles.productDescription}>
        <div className={styles.productName}>
          <div className={styles.productNameLeft}>
            {name.toUpperCase()}
          </div>
          <div className={styles.productNameRight}>
            <div className={styles.closeBtn} onClick={() => removeItemFromCart(id)}>
              <IoMdClose size={30} color="tomato" />
            </div>
          </div>
        </div>
        <div className={styles.priceBox}>
          <div className={styles.price}>
            {`R$ ${priceValue === "" ? 0 : priceValue},${priceCents}`}
          </div>
          <div className={styles.sellingPrice}>
            {`R$ ${listPriceValue === "" ? 0 : listPriceValue},${listPriceCents}`}
          </div>
          <div className={styles.sellingPrice}>
            {`Qtd: ${Number(quantityToBuy)}`}
          </div>
        </div>
      </div>
    </div>
  )
}
