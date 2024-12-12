import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if(context.fiteredItems?.length > 0){
      return(
        context.fiteredItems?.map(item => (
          <Card 
          key={item.id}
          data={item}/>
        ))
      )
    }else{
      return(
        <div className='flex justify-center'>
          <h1 className='text-amber-100 font-bold'>ITEM NOT FOUND</h1>
        </div>
      )
    }
    
  }

    return (
      <>
      <Layout >
      <div className='flex items-center justify-center relative w-80'>
          <h1 className='text-amber-100 font-bold mt-3 p-2'>Home</h1>
        </div>
        <input 
          type="text" 
          placeholder='Search product' 
          className='rounded-lg border bg-fuchsia-950/50 border-fuchsia-950 w-80 p-3 mb-4 focus:outline-none text-amber-100 font-light'
          onChange={(event) => context.setSearchByTitle(event.target.value)}/>
        <div className='justify-center grid gap-4 lg:grid-cols-4 w-full max-w-screen-lg md:grid-cols-3 pb-3 px-3'>
          {renderView()}
        </div>
        <ProductDetail /> 
        </Layout>
      </>
    )
  }
  
  export default Home