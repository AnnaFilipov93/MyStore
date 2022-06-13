import { createContext, useContext, useState } from "react";
import productsFromDB from './../Data/product.json';

const usersContext = createContext();
const productsContext = createContext();
const cartContext = createContext();
const currentUserContext = createContext();

export function useUsers() {
  return useContext(usersContext);
}

export function useCurrentUser() {
  return useContext(currentUserContext);
}

export function useProducts() {
  return useContext(productsContext);
}

export function useCart() {
  return useContext(cartContext);
}

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [products, setProducts] = useState(productsFromDB);
  const [cart, setCart] = useState([]);

  const users = [
    {
      id: 1,
      name: "Anna-diana Toseland",
      email: "atoseland0@washingtonpost.com",
      password: "jmWbuQJ3k",
      role: "customer"
    },
    {
      id: 2,
      name: "Gill Peres",
      email: "gperes1@about.me",
      password: "SfYdp9FB5qUS",
      role: "customer"
    },
    {
      id: 3,
      name: "Brooks Naulls",
      email: "admin@gmail.com",
      password: "admin",
      role: "admin"
    },
    {
      id: 4,
      name: "Melinda Voelker",
      email: "mvoelker3@newsvine.com",
      password: "KZtCzMH",
      role: "customer"
    },
    {
      id: 5,
      name: "Andonis Gladhill",
      email: "agladhill4@webs.com",
      password: "xYjrqt",
      role: "customer"
    },
    {
      id: 6,
      name: "Kelila Hansberry",
      email: "khansberry5@google.de",
      password: "Tv2ulD",
      role: "customer"
    }
  ];

  return (
    <usersContext.Provider value={users}>
      <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <productsContext.Provider value={{products, setProducts}}>
        <cartContext.Provider value={{cart, setCart}}>
          {children}
        </cartContext.Provider>
        </productsContext.Provider>
      </currentUserContext.Provider>
    </usersContext.Provider>
  );
}
