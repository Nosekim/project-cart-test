import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useMain } from "../../providers/main.provider";
import { ProductType } from "../../types";
import ProductCardCart from "../ProductCardCart";

import styles from './styles.module.css';

interface IModalProps {
  isOpen: boolean;
  onCloseRequest: () => void;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, onCloseRequest }) => {
  const { cart } = useMain();
  const [totalCartValue, setTotalCartValue] = useState<number>(0);

  useEffect(() => {
    if (cart) {
      const { items } = cart;
      const qty = items.reduce((acc, item) => {
        const qty = Number(item.quantityToBuy);
        const price = Number(item.sellingPrice);
        return (Number(acc) + Number(qty * price));
      }, 0);
      setTotalCartValue(qty);
    }
  }, [cart]);

  if (!isOpen) {
    return null;
  }

  const priceValue = String(totalCartValue).split("").slice(0, -2).join("");
  const priceCents = String(totalCartValue).split("").slice(-2).join("");

  return (
    <div className={styles.window}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.closeBtn} onClick={() => onCloseRequest()}>
            <IoMdClose size={30} color="white" />
          </div>
          <h1>Meu Carrinho</h1>
          <div className={styles.contentProducts}>
            {cart && cart.items.length <= 0 && <h3>{`O carrinho está vazio`}</h3>}
            {cart && cart.items.map((product: ProductType) => <ProductCardCart key={product.id} product={product} />)}
          </div>
          <div className={styles.divider}></div>
          <div className={styles.totalBox}>
            <div className={styles.totalContentLeft}>
              {`Total`}
            </div>
            <div className={styles.totalContentRight}>
              {`R$ ${priceValue === "" ? '0' : priceValue}, ${priceCents === '0' ? '00' : priceCents}`}
            </div>
          </div>
          {totalCartValue > 1000 && <div className={styles.cartFreeShipBox}>
            <div className={styles.cartFreeShip}>
              Parabéns, sua compra tem frete grátis!
            </div>
          </div>}
          <div className={styles.divider}></div>
          <div className={styles.finishBox}>
            <button title="Finalizar compra" onClick={() => { return }} className={styles.finishBtn}>
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;