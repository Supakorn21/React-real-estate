import React, { useContext, useState } from "react";
import listingsData from "../data/listingsData";
export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext);
  }

  export function AppProvider({ children }) {
    const [listingsData, setListingsData] = useState({listingsData});

    console.log(listingsData)
    return (
        <StateContext.Provider
          value={{
            listingsData
          }}
        >
          {children}
        </StateContext.Provider>
      );
  }
 