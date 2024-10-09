import { NavLink } from "react-router-dom"

const Navbar = () =>{
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between item-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
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
                <li>
                    <NavLink
                    to='/chart' className={({ isActive }) => isActive ? activeStyle: undefined}>
                        Chart
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar