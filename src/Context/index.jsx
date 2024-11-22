import { createContext, useState, useEffect } from 'react'

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

    //gndhtgmmdg
    const [order, setOrder] = useState([]);

    //get products
    const [items, setItems] = useState(null);

     //get products
     const [fiteredItems, setFilteredItems] = useState(null);

    //get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])
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
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            fiteredItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}