import './Logo.css'
import logo from '../../images/logo.svg'
import { BASE_URL } from '../../utils/constants'

function  Logo () {



  return (
    <div className='logo__container'>
      <img className='logo__image' src={logo} alt="logo"/>
      <p className='logo__title'>{BASE_URL}</p>
    </div>
  )
}

export default Logo
