const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center min-h-screen mt-20 bg-gradient-to-b from-orange-600 to-pink-600 p-1'>
            {children}
        </div>
    )
}

export default Layout