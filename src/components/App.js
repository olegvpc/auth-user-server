import logo from '../images/logo.svg';
import './App.css';
import Header from '../components/Header/Header.js'
import Preloader from '../components/Preloader/Preloader';
import { useEffect, useState } from "react";

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import {
  register,
  getJwt,
  verifyToken
} from '../utils/MainApi';
import useFormWithValidation from '../hooks/UseFormWithValidation'


function App() {

  const [currentUser, setCurrentUser] = useState({username: '', password: ''});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {resetForm} = useFormWithValidation();

  useEffect(() => {
    // console.count("RENDER - TOKEN") // пустой массив зависимостей - Render только при монтировании
    checkToken();
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true)
      const token = localStorage.getItem('jwt');
      verifyToken(token)
        .then((userData) => {
          playSound('gong.mp3'); // при монтировании элемента слышен гонг
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(`ошибка получения данных по API при первичном обращении за карточками и юзером ${err}`);
        })
      .finally(() => setIsLoading(false))
    }
  }, [loggedIn])

  // регистрация пользователя на сервере
  function handleRegister (name, password) {
    // console.log("App function Register" + name + password)
    register(name, password)
    .then((data) => {
      if (data) {
        // console.log(data) // {email: '', username: 'jhg', id: 4}
        handleJwt(name, password)
      }
    })
    .catch(err => console.log(err))
    .finally(() => resetForm())
  }
  // получение jwt токена с сервера
  function handleJwt (name, password) {
    getJwt(name, password)
    .then((data) => {
      // console.log(data.access);
      setLoggedIn(true);
      localStorage.setItem('jwt', data.access); // запись токена в LocalStarage
    })
    .catch(err => console.log(err))
  }

  // функция получения с сервера данных о пользователе по токену
  function checkToken() {
    const token = localStorage.getItem('jwt');
    if(token) {
      verifyToken(token)
      .then((userData) => {
        setLoggedIn(prev => !prev);
        // console.log(userData) // {email: '', id: 7, username: 'olegiuyw'}
        // history.push(location.pathname);
      })
      .catch((err) => {
        handleSignOut()
        console.log(err);
      });
    }
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    setIsLoading(false)
    setCurrentUser({});
  }
  function playSound(fileName) {
    const audio = new Audio();
    audio.src = `https://code.s3.yandex.net/web-code/react/${fileName}`;
    audio.play();
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header
          onRegister={handleRegister}
          onGetJwt={handleJwt}
          onResetUser={handleSignOut}
          loggedIn={loggedIn}
        />
        {isLoading ?
        <Preloader /> :
        (
        <main className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </main>
        )
        }
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
