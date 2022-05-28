import {createContext, useState} from 'react'

const GlobalContext = createContext();

export const Context = ({children}) =>{
    const [cart, setCart] = useState([]);
    return(
        <GlobalContext.Provider value={{cart, setCart}}>
                {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext

