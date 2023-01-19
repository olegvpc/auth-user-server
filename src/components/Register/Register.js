import './Register.css';
import Entrance from '../Entrance/Entrance';


function Register({ onRegister, loggedIn }){

  return (
    <Entrance
      type='signup'
      title='Новый пользователь?'
      btnName='Зарегистрироваться'
      onSubmit={onRegister}
      loggedIn={loggedIn}
    >
    </Entrance>
  );
}

export default Register;
