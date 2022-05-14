import React, { useContext, useState, createContext, useEffect } from "react";
import { getUser } from "../realm/connection";
import { ProductType } from './../types';

type Props = {
  children: React.ReactNode;
};

type CartType = {
  items: ProductType[];
};

type ContextResult = {
  realmUser: Realm.User | null;
  updateCart: (value: ProductType) => void;
  cart: CartType;
  removeItemFromCart: (value: string) => void;
};

const MainContext = createContext<ContextResult | null>(null);

function MainProvider({ children }: Props) {
  const [realmUser, setRealmUser] = useState<Realm.User | null>(null);
  const [cart, setCart] = useState<CartType>({ items: [] });

  const updateCart = (cartItem: ProductType): void => {
    setCart(old => {
      const { items } = old;
      const parseOld = [...items];
      const position = parseOld.map(function (e) { return e.id; }).indexOf(cartItem.id);
      const findItem = position !== -1 ? parseOld[position] : null;
      if (findItem) {
        const oldQuantity: number = findItem.quantityToBuy ?? 0;
        const newQuantity = Number(oldQuantity) + Number(cartItem.quantityToBuy);
        findItem.quantityToBuy = newQuantity;
        parseOld[position] = findItem;
        return { items: parseOld };
      } else {
        return { items: [...items, cartItem] };
      }
    });
  }

  const removeItemFromCart = (id: string): void => {
    setCart(old => {
      const { items } = old;
      const parseOld = [...items];
      const position = parseOld.map(function (e) { return e.id; }).indexOf(id);
      if (position !== -1) {
        parseOld.splice(position, 1);
        return { items: parseOld };
      } else {
        return { items: [...items] };
      }
    });
  }

  useEffect(() => {
    (async () => {
      const user = await getUser();
      setRealmUser(user);
    })();
  }, []);

  return (
    <MainContext.Provider
      value={{
        realmUser,
        updateCart,
        cart,
        removeItemFromCart
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

const useMain = () => {
  const context = useContext(MainContext);
  if (context == null) {
    throw new Error("usecontext() called outside of a MainProvider?");
  }
  return context;
};

export { MainProvider, useMain };