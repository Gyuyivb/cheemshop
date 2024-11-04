import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Navbar = () =>{
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className='flex justify-between item-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold'>
                    <NavLink 
                    to='/' >
                        Cheemshop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/all' className={({ isActive }) => isActive ? activeStyle: undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes' className={({ isActive }) => isActive ? activeStyle: undefined}>
                        Clothes
                    </NavLink>   
                </li>
                <li>
                    <NavLink
                    to='/jewerly' className={({ isActive }) => isActive ? activeStyle: undefined}>
                        Jewerly
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others' className={({ isActive }) => isActive ? activeStyle: undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-amber-950'>
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
                    <ShoppingCartIcon className='size-5 text-black' /> {context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar