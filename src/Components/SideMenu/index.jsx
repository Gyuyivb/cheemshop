import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router-dom"

const SideMenu = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

     return (
        <aside className={
            `${context.isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
            flex-col w-60 h-full fixed top-0 right-0 transform transition-transform duration-300 rounded-lg bg-fuchsia-950 text-orange-500 text-lg text-right
            `}>
                <ul className='mt-24 pb-3 pr-4'>
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
                    <li className='py-2'>
                        <NavLink
                        to='/my-orders' className={({ isActive }) => isActive ? activeStyle: undefined}>
                            My Orders
                        </NavLink>
                    </li>
                    <li className='pb-2'>
                        <NavLink
                        to='/my-account' className={({ isActive }) => isActive ? activeStyle: undefined}>
                            My Account
                        </NavLink>   
                    </li >
                    <li className='pb-2'>
                        <NavLink
                        to='/sign-in' className={({ isActive }) => isActive ? activeStyle: undefined}>
                            Sign In
                        </NavLink>
                    </li>
                </ul>
                <p className='text-amber-100 px-6 mb-1 text-sm absolute right-0 bottom-0'>  
                    cheemsburger@cheems.com
                </p>
        </aside>
     )
}

export default SideMenu