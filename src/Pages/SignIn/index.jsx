import Layout from "../../Components/Layout"
import { Link, Navigate } from 'react-router-dom'
import { useContext,  useState, useRef } from "react"
import { ShoppingCartContext } from "../../Context"

function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [isSignUp, setIsSignUp] = useState('')
  const form = useRef(null)
  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  //Has an account?
  const noAccountLocalStorage = parsedAccount? Object.keys(parsedAccount).lenght === 0 : true
  const noAccountInLocalState = context.account? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
    //Redirect
    return <Navigate replace to={'/'} />
  }
  //Create an account
  const createAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    }
    // Create account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
    //Sign in
    handleSignIn()
  }

  const accountValidation = () => {
    if(!isSignUp){
      return(
        <div>
          <div className="mb-4">
                  <p className=" font-semibold text-xs">username:</p>  
                  <span className="block">{parsedAccount?.username}</span> 
            </div>
            <div className="mb-4">
                  <p className="font-semibold text-sm">email:</p>
                  <span className="block"> {parsedAccount?.email}</span> 
            </div>
            <div className="mb-6">
                  <p className="font-semibold text-xs"> password:</p>
                  <span className="block">{parsedAccount?.password}</span>
            </div>
            <Link to='/my-account'>
                <button 
                 disabled={!hasUserAnAccount}
                className={`bg-fuchsia-950 py-3 text-amber-50 w-full rounded-lg ${!hasUserAnAccount ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleSignIn()}>Log in</button>
            </Link>
              <button 
              disabled={hasUserAnAccount}
              onClick={() => setIsSignUp(true)}
              className={`bg-amber-50 py-3 text-fuchsia-950 w-full rounded-lg mt-5 ${hasUserAnAccount? 'opacity-50 cursor-not-allowed' : ''}`}>Sign up</button>
        </div>
      )
    }else{
      return(
        <>
          <form ref={form} className=''>
            <label className=" font-semibold text-xs">Username:</label> 
              <input type="text" id="username" name="username" placeholder="Username" defaultValue={parsedAccount?.username}
                      className="rounded-lg border bg-amber-100/50 border-fuchsia-950 w-80 p-3 mb-4 focus:outline-none text-orange-800 font-light" 
                      required />
              <label className="font-semibold text-sm">Email:</label>
              <input type="text" id="email" name="email" placeholder="Email" defaultValue={parsedAccount?.email}
                      className="rounded-lg border bg-amber-100/50 border-fuchsia-950 w-80 p-3 mb-4 focus:outline-none text-orange-800 font-light" 
                      required />
              <label className="font-semibold text-xs">Password:</label>
              <input type="text" id="password" name="password" placeholder="Password" defaultValue={parsedAccount?.password}
                      className="rounded-lg border bg-amber-100/50 border-fuchsia-950 w-80 p-3 mb-4 focus:outline-none text-orange-800 font-light" 
                      required />
              <Link to='/'>
                  <button 
                  className={`bg-fuchsia-950 py-3 text-amber-50 w-full rounded-lg`}
                  onClick={() => createAccount()}>Create</button>
              </Link>
          </form>
        </>
      )
    }
  }

    return (
      <>
      <Layout>
          <h1 className='text-amber-100 font-bold p-5'>Welcome!</h1>
          <div className="flex flex-col justify-between w-96 bg-gradient-to-t from-amber-50/20 to-amber-50/40 rounded-lg p-6 text-amber-200 text-lg">
          {accountValidation()}
          </div>     
        </Layout>
      </>
    )
  }
  
  export default SignIn