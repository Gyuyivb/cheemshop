const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center mt-20 bg-gradient-to-r from-orange-700 to-pink-800 p-1'>
            {children}
        </div>
    )
}

export default Layout