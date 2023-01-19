import './Header.css'
import Logo from '../Logo/Logo'
import FormsAuth from '../FormsAuth/FormsAuth'

function Header ({ onRegister, onGetJwt, onResetUser, loggedIn }) {

    return (
      <header className="header__container">
        <Logo />
        <FormsAuth
          onRegister={onRegister}
          onGetJwt={onGetJwt}
          onResetUser={onResetUser}
          loggedIn={loggedIn}
        />
      </header>
    )
}

export default Header
