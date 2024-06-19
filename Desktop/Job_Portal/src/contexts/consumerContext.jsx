import React, { createContext, useContext, useState } from 'react';

const ConsumerContext = createContext();

export const useConsumer = () => {
  return useContext(ConsumerContext);
};

export const ConsumerProvider = ({ children }) => {
  const [consumer, setConsumer] = useState(null);

  return (
    <ConsumerContext.Provider value={{ consumer, setConsumer }}>
      {children}
    </ConsumerContext.Provider>
  );
};
