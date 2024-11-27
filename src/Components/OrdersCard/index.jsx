import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    
    return (
        <div className='flex justify-between items-center mb-2 border-2 border-fuchsia-950 rounded-lg p-4 w-96 bg-amber-200/10 text-fuchsia-950'>
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-normal text-lg'>01.03.34</span>
                    <span>{totalProducts} articles</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6  cursor-pointer'></ChevronRightIcon>
                </div>
            </p>
        </div>
    )
}

export default OrdersCard