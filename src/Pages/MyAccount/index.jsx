import { useContext, useState, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout"

function MyAccount() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const form = useRef(null)

  const editAccount = () => {
    const formData = new FormData(form.current)
		const data = {
			username: formData.get('username'),
			email: formData.get('email'),
			password: formData.get('password')
		}
    console.log('la wea ', data.email)
    // Update account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
  }
  //Display user info
  const renderUserInfo = () => {
    return (
      <div className='flex flex-col w-80 p-6 text-amber-200'>
        <p>
          <span className='font-light text-md'>Name: </span>
          <span>{parsedAccount?.username}</span>
        </p>
        <p>
          <span className='font-light text-md'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className='bg-fuchsia-950 text-amber-50 w-full rounded-lg mt-6 py-3'
          onClick={() => setView('edit-user-info')}>
          Edit
        </button>
      </div>
    )
  }
  //edit user info
  const renderEditUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80 text-orange-950'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="username" className='font-light text-sm'>Your username:</label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={parsedAccount.username}
            placeholder="Username"
            className='rounded-lg border bg-amber-100/50 border-fuchsia-950 placeholder:font-light placeholder:text-sm placeholder:text-fuchsia-950/60 focus:outline-none py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-light text-sm'>Your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount.email}
            placeholder="ex@example.com"
            className='rounded-lg border bg-amber-100/50 border-fuchsia-950 placeholder:font-light placeholder:text-sm placeholder:text-fuchsia-950/60 focus:outline-none py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-light text-sm'>Your password:</label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount.password}
            placeholder="******"
            className='rounded-lg border bg-amber-100/50 border-fuchsia-950 placeholder:font-light placeholder:text-sm placeholder:text-fuchsia-950/60 focus:outline-none py-2 px-4'
          />
        </div>
        <button
          className='bg-fuchsia-950 text-amber-50 w-full rounded-lg py-3'
          onClick={(e) => {e.preventDefault(), setView('user-info'), editAccount()}}>
          Edit
        </button>
      </form>
    )
  }
  
  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()
  
    return (
      <>
      <Layout>
      <h1 className='text-amber-100 font-bold p-5'>My Account</h1>
      <div className="flex flex-col justify-between w-96 bg-gradient-to-t from-amber-50/20 to-amber-50/40 rounded-lg p-6 text-amber-200">
        {renderView()}
      </div>
      </Layout>
      </>
    )
  }
  
  export default MyAccount