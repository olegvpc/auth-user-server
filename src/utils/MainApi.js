import { BASE_URL } from '../utils/constants';
// const token = () => localStorage.getItem('jwt');

function getResponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject({message: err.message, status: res.status}))
}
// рагистрация пользователя на сервере
export const register = (username, password) => {
  return fetch(`${BASE_URL}/auth/users/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  })
  .then((res) => {
    // console.log(res) // Response {type: 'cors', url: 'https://auth.nomoreparties.co/signup', redirected: false, status: 201, ok: true,
    return getResponse(res)
  })
};

export const getJwt = (username, password) => {
  return fetch(`${BASE_URL}/auth/jwt/create/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  })
  .then((res) => {
    return getResponse(res)
  })
}

export const verifyToken = (token) => {
  // console.log(`токен из LocalStorage ${token}`)
  return fetch(`${BASE_URL}/auth/users/me/`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then((res) => {
    return getResponse(res)
  })
}
//   // Получение сохраненных пользователем фильмов
// export const getUsersMovies = () => {
//   return fetch(`${BASE_URL}/movies`, {
//     method: 'GET',
//     headers: {
//       authorization: `Bearer ${token()}`,
//       'Content-Type': 'application/json'
//     }
//   })
//   .then((res) => {
//     return getResponse(res)
//   });
// }

//   // Сохраненение пользователем фильма
// export const saveNewMovie = (
//   movie
//   ) => {
//   // const {_id, ...card} = movie // убираем лишний параметр
//   return fetch(`${BASE_URL}/movies`, {
//     method: 'POST',
//     headers: {
//       authorization: `Bearer ${token()}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify( movie
//       )
//   })
//   .then((res) => {
//     return getResponse(res)
//   });
// }

// //метод удаления карточки пользователя с сервера
// export const deleteMovie = (movieId) => {
//   return fetch(`${BASE_URL}/movies/${movieId}`, {
//     method: 'DELETE',
//     headers: {
//       authorization: `Bearer ${token()}`,
//       'Content-Type': 'application/json'
//     }
//   }).then((res) => {
//     return getResponse(res)
//   });
// }



//   // Получение данных о пользователе
// export const getUserInfo = () => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       authorization: `Bearer ${token()}`,
//       'Content-Type': 'application/json'
//     }
//   })
//   .then((res) => {
//     return getResponse(res)
//   });
// }

// export const updateUserInfo = (name, email) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'PATCH',
//     headers: {
//       authorization: `Bearer ${token()}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name,
//       email
//     })
//   })
//   .then((res) => {
//     return getResponse(res)
//   });
// }
