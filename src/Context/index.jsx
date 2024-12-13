import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

// const defaultUserData= {
//   username: 'Cheemsburger',
//   email: 'cheemsburger@cheesmail.com',
//   password: 'amxiety333'
// }

export const initializaLocalStorage = () =>{
  const accountLocalStorage = localStorage.getItem('account')
  const signOutLocalStorage = localStorage.getItem('sign-out')
  let accountParsed
  let signOutParsed

  if (!accountLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    accountParsed = {}
  }else {
    accountParsed = JSON.parse(accountLocalStorage)
  }

  if (!signOutLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    signOutParsed = false
  }else {
    signOutParsed = JSON.parse(signOutLocalStorage)
  }
}

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    //detalles del producto
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => {setIsProductDetailOpen(true)}

    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    //Side menu navbar
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Checkout Side Menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    
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

    //States for logging in and creating/existing account
    const [account, setAccount] = useState({})
    const [signOut, setSignOut] = useState(false)
    
    //Gets the api
    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  //Get by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.includes(searchByCategory))
  }

  //filter by name and category
  const filteredBy = (searchType, items, searchByTitle, searchByCategory)=>{
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }if (!searchType) {
      return items
  }}

  useEffect(() => {
    if(searchByTitle && searchByCategory) setFilteredItems(filteredBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if(searchByTitle && !searchByCategory) setFilteredItems(filteredBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if(!searchByTitle && searchByCategory) setFilteredItems(filteredBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if(!searchByTitle && !searchByCategory) setFilteredItems(filteredBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])
  
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
            searchByCategory,
            setSearchByCategory,
            isMenuOpen,
            setIsMenuOpen,
            signOut,
            setSignOut,
            account,
            setAccount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}