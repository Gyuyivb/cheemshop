import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    //detalles del producto
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => {setIsProductDetailOpen(true)}

    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    
    const openCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(true) 
        console.log('ssss :' , isCheckoutSideMenuOpen)}
    
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false) 

    //Show products
    const [productToShow, setProductToShow] = useState({})

    //hace parte del shopping cart, se agregan los productos a la bolsa
    const [cartProducts, setCartProducts] = useState([]);
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}