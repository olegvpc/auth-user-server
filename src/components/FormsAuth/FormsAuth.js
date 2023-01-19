import './FormsAuth.css'
import Register from '../Register/Register'
import GetJwt from '../GetJwt/GetJwt'
import UserInfo from '../UserInfo/UserInfo'

function FormsAuth ({ onRegister, onGetJwt, onResetUser, loggedIn }) {
  return (
    <div className="form-auth__container">
      <h1 className='form-auth__title'>Авторизация:</h1>
      <Register
        onRegister={onRegister}
        loggedIn={loggedIn}
        />
        <GetJwt
        onGetJwt={onGetJwt}
        loggedIn={loggedIn}
        />
        <UserInfo
        onResetUser={onResetUser}
        loggedIn={loggedIn}
        />
    </div>
  )
}

export default FormsAuth
