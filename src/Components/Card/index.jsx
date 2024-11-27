import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import { PlusIcon } from "@heroicons/react/24/solid"
import { CheckIcon } from "@heroicons/react/24/solid"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.setProductToShow(ProductDetail)
    }

    const addProductToCart = (event, productData)=> {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-lime-300 w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='size-3 text-fuchsia-950' />
                </div>
                    )
        } else{
            return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-amber-200 w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addProductToCart(event, data.data)}>
                    <PlusIcon className='size-3 text-fuchsia-950' />
                </div>   
            )        
        }
        
    }

    return(
        <div 
        className='bg-amber-100/60 cursor-pointer w-56 h-60 rounded-lg p-1 md:w-60 md:h-72 sm:w-72 sm:h-80 overflow-hidden'
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-1 bg-amber-200/60 rounded-lg text-orange-700 text-xs m-2 px-1 py-0.5'>{data.data.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image}/>
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between pl-1 pr-1'>
                <span className='text-sm font-light text-amber-100 line-clamp-2'>{data.data.title}</span>
                <span className='text-lg font-md text-orange-100'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card