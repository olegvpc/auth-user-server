
import Entrance from '../Entrance/Entrance';


function GetJwt({ onGetJwt, loggedIn }){

  return (
    <Entrance
      type='signin'
      title='Уже зарегистрированы?'
      btnName='Получить JWT'
      onSubmit={onGetJwt}
      loggedIn={loggedIn}
    >
    </Entrance>
  );
}

export default GetJwt;