import React, { useEffect, useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import Modal from '../../components/ModalCart';

import { useMain } from '../../providers/main.provider';
import ProductCard from './../../components/ProductCard';
import { ProductType } from './../../types';
import styles from './style.module.css';

export default function Home() {
  const { realmUser, cart } = useMain();
  const [productsList, setProductsList] = useState<ProductType[]>([]);
  const [cartQtyItems, setCartQtyItems] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (realmUser) {
        const products: ProductType[] = await realmUser.functions.findProducts();
        if (products) {
          setProductsList(products);
        }
      }
    })();
  }, [realmUser])

  useEffect(() => {
    if (cart) {
      const { items } = cart;
      const qty = items.reduce((acc, item) => (Number(acc) + Number(item.quantityToBuy ?? 0)), 0);
      setCartQtyItems(qty);
    }
  }, [cart]);

  return (
    <div className={styles.background}>
      <div className={styles.basket} onClick={() => setModalOpen(true)}>
        <div className={styles.badger}>{cartQtyItems}</div>
        <BsCart3 size={40} />
      </div>

      <header>Produtos</header>
      <div className={styles.content}>
        {productsList && productsList?.map((product: ProductType) => <ProductCard key={product.id} product={product} />)}
      </div>
      <Modal isOpen={modalOpen} onCloseRequest={() => setModalOpen(false)} />
    </div>
  )
}