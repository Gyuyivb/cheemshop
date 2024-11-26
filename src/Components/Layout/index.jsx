const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center mt-20 bg-amber-200 p-1'>
            {children}
        </div>
    )
}

export default Layout