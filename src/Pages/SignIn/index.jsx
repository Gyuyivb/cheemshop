import Layout from "../../Components/Layout"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function SignIn() {
  const context = useContext(ShoppingCartContext)
  const accountValidation = () => {

    if(context.signOut){
      return(
        <div>
          <div className="mb-4">
                  <p className=" font-semibold text-xs">username:</p>  
                  <span className="block">{context.account.username}</span> 
            </div>
            <div className="mb-4">
                  <p className="font-semibold text-sm">email:</p>
                  <span className="block"> {context.account.email}</span> 
            </div>
            <div className="mb-6">
                  <p className="font-semibold text-xs"> password:</p>
                  <span className="block">{context.account.password}</span>
            </div>
            
        </div>
      )
    }else{
      return(
        <div>
          <p className=" font-semibold text-xs">username:</p> 
            <input type="text" id="name" name="name" placeholder="Username" 
                    className="rounded-lg border bg-amber-100/50 border-fuchsia-950 w-80 p-3 mb-4 focus:outline-none text-orange-800 font-light" 
                    required />
            <p className="font-semibold text-sm">email:</p>
            <input type="text" id="name" name="name" placeholder="Email" 
                    className="rounded-lg border bg-amber-100/50 border-fuchsia-950 w-80 p-3 mb-4 focus:outline-none text-orange-800 font-light" 
                    required />
            <p className="font-semibold text-xs"> password:</p>
            <input type="text" id="name" name="name" placeholder="Password" 
                    className="rounded-lg border bg-amber-100/50 border-fuchsia-950 w-80 p-3 mb-4 focus:outline-none text-orange-800 font-light" 
                    required />
        </div>
      )
    }
  }

    return (
      <>
      <Layout>
          <h1 className='text-amber-100 font-bold p-5'>Welcome!</h1>
          <div className="flex flex-col justify-between w-96 bg-gradient-to-t from-amber-50/20 to-amber-50/40 rounded-lg p-6 text-amber-200 text-lg">
          {accountValidation()}
          <Link to='/my-account'>
                <button className='bg-fuchsia-950 py-3 text-amber-50 w-full rounded-lg'>Log in</button>
            </Link>
            <Link to='/my-account'>
                <button className='bg-amber-50 py-3 text-fuchsia-950 w-full rounded-lg mt-5'>Sign up</button>
            </Link>
          </div>
          
        </Layout>
      </>
    )
  }
  
  export default SignIn