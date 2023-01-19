import './UserInfo.css'
import React from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function UserInfo ({onResetUser, loggedIn}) {

  const currentUser = React.useContext(CurrentUserContext)
  const token = () => localStorage.getItem("jwt")
  const user = () => currentUser.username


  // useEffect(() => {
  //   // console.log("СМЕНИЛСЯ ПОЛЬЗОВАТЕЛЬ " + loggedIn + changeUser)

  // }, [loggedIn])

  return (
    <div className='user-info__container'>
      <div className='user-info__block'>
        <h2 className='user-info__title'>Username:</h2>
        {currentUser.username && (
          <p className='user-info__box'>{user()}</p>
        )}
      </div>
      <div className='user-info__block'>
        <h2 className='user-info__title'>JWT Token:</h2>
        {token && (
          <p
          className='user-info__textares'
          rows='7'
          // defaultValue={token()}
          >{token()}</p>
        )}
      </div>
      <button
      type='button'
      className='user-info__btn'
      disabled={!token()}
      onClick={() => onResetUser()}
      >Сбросить данные</button>
    </div>
  )
}

export default UserInfo;

