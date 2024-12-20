import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

    return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
          </Link>
          <h1 className='text-amber-100 font-bold m-6'>My Order</h1>
        </div>
        <div className='flex flex-col max-w-[666px] w-full bg-gradient-to-t from-amber-50/20 to-amber-50/40 rounded-lg p-6'>
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                        />
                    ))
                }
          </div>
        </Layout>
    )
  }
  
  export default MyOrder