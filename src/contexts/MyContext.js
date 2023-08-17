import React, {createContext, useContext, useState} from 'react';

const MyContext = createContext();

export function MyContextProvider({children}) {

  const [isLogin, setIsLogin] = useState(false);

  const updateData = value => {
    setIsLogin(value);
  };
  
  return (
    <MyContext.Provider value={{isLogin, updateData} }>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
