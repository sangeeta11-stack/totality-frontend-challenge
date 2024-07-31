import React, { createContext, useState, useContext } from 'react';

const CardContext = createContext();

export const useCard = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
  const [savedProperties, setSavedProperties] = useState([]);

  const addToCard = (property) => {
    setSavedProperties([...savedProperties, property]);
  };

  const removeFromCard = (id) => {
    setSavedProperties(savedProperties.filter(property => property.id !== id));
  };

  return (
    <CardContext.Provider value={{ savedProperties, addToCard, removeFromCard }}>
      {children}
    </CardContext.Provider>
  );
};
