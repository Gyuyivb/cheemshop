import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import { PlusIcon } from "@heroicons/react/24/solid"

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
        console.log('AAA ', context.cartProducts)
    }
    return(
        <div 
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-blue-950 text-xs m-2 px-1 py-0.5'>{data.data.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image}/>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                onClick={(event) => addProductToCart(event, data.data)}><PlusIcon  className='size-3 text-black' /></div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-md'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card