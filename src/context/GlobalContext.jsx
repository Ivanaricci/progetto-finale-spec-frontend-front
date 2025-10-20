import { createContext, useContext } from "react";
import { useProducts } from "../hooks/useProducts";

const GlobalContext = createContext();

export function useGlobalContext() {

    return useContext(GlobalContext);
}


export function GlobalProvider({ children }) {
    const productsState = useProducts();
    return (
        <GlobalContext.Provider value={{ productsState }}>
            {children}
        </GlobalContext.Provider>
    )
}