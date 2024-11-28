import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { Bars3Icon } from "@heroicons/react/16/solid"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Navbar = () =>{
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    const toggleOnSideBar = () =>{
        context.setIsMenuOpen(!context.isMenuOpen)
    }

    return(
        <nav className='flex justify-between item-center fixed z-10 top-0 w-full py-8 px-8 text-sm font-light bg-fuchsia-950 text-amber-200'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold'>
                    <NavLink 
                    to='/'
                    onClick={() => context.setSearchByCategory('')} 
                    >
                        Cheemshop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes' className={({ isActive }) => isActive ? activeStyle: undefined}
                    onClick={() => context.setSearchByCategory('clothing')}
                    >
                        Clothes
                    </NavLink>   
                </li>
                <li>
                    <NavLink
                    to='/jewelry' className={({ isActive }) => isActive ? activeStyle: undefined}
                    onClick={() => context.setSearchByCategory('jewelery')}
                    >
                        Jewelry
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics' className={({ isActive }) => isActive ? activeStyle: undefined}
                    onClick={() => context.setSearchByCategory('electronics')}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others' className={({ isActive }) => isActive ? activeStyle: undefined}
                    onClick={() => context.setSearchByCategory('others')}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='hidden lg:flex items-center gap-3'>
                <li className='text-amber-100'>
                    cheemsburger@cheems.com
                </li>
                <li>
                    <NavLink
                    to='/my-orders' className={({ isActive }) => isActive ? activeStyle: undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/my-account' className={({ isActive }) => isActive ? activeStyle: undefined}>
                        My Account
                    </NavLink>   
                </li>
                <li>
                    <NavLink
                    to='/sign-in' className={({ isActive }) => isActive ? activeStyle: undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex'>
                    <ShoppingCartIcon className='size-5 text-amber-200' 
                    onClick={() => {
                        if(context.isCheckoutSideMenuOpen){
                            context.closeCheckoutSideMenu()
                            }else{context.openCheckoutSideMenu()}
                        }}
                    /> {context.cartProducts.length}
                </li>
            </ul>
            <ul className='lg:hidden flex gap-5'>
                <li className='flex'>
                    <ShoppingCartIcon className='size-7 text-amber-200' 
                    onClick={() => {
                        if(context.isCheckoutSideMenuOpen){
                            context.closeCheckoutSideMenu()
                            }else{context.openCheckoutSideMenu()}
                        }}
                    /> {context.cartProducts.length}
                </li>
                <li>
                    <Bars3Icon 
                    className='size-7 text-amber-200' 
                    onClick={toggleOnSideBar}/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar