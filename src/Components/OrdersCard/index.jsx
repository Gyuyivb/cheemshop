import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    
    return (
        <div className='flex justify-between items-center mb-2 border border-red-950 rounded-lg p-4 w-80'>
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>01.03.34</span>
                    <span>{totalProducts} articles</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'></ChevronRightIcon>
                </div>
            </p>
        </div>
    )
}

export default OrdersCard