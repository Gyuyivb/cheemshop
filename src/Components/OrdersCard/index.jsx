import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    
    return (
        <div className='flex justify-between items-center mb-2 border border-red-950'>
            <p>
                <span>01.03.34</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard