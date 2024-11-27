import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-amber-100 border border-fuchsia-950 rounded-lg bg-white overflow-y-scroll`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl text-fuchsia-950'>Details</h2>
                <div >
                    <XMarkIcon className="size-6 text-fuchsia-950 cursor-pointer" 
                    onClick={() => context.closeProductDetail()}/>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h=full rounded-lg' 
                src={context.productToShow.image} 
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-5 '>
                <span className='font-medium text-2xl mb-2 text-fuchsia-950'>{context.productToShow.price}$</span>
                <span className='font-medium text-md text-pink-950'>{context.productToShow.title}</span>
                <span className='font-light text-sm text-fuchsia-950'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail