import './Entrance.css';
// import { Link } from 'react-router-dom';
import useFormWithValidation from '../../hooks/UseFormWithValidation';
import { useEffect } from 'react'


function Entrance({
  type,
  title,
  btnName,
  onSubmit,
  loggedIn,
  // infoMessage,
  // setInfoMessage,
 }) {

  const {values, errors, isValid, handleChange, resetForm} = useFormWithValidation();

  useEffect(() => {
    // console.log("Entrance - value change")
    resetForm()
  }, [loggedIn])


  function handleSubmit(e) {
    e.preventDefault();
    type === 'signup'
      ? onSubmit(values.name, values.password)
      : onSubmit(values.name, values.password);
  }

  return (
    <section className='entrance'>
      <h2 className='entrance__title'>{title}</h2>
      <form className='entrance__form'
      onSubmit={handleSubmit}
      >
        <label className='entrance__label'>Username
          <input
            // id='name'
            type='text'
            className='entrance__input'
            name='name'
            minLength='2'
            maxLength='30'
            required
            autoComplete="off"
            pattern='^[A-Za-zА-Яа-яЁё\-]+$'
            value={values.name || ''} // Чтобы Реакт не ругался в консоли на пустые поля
            onChange={handleChange}
          />
          <span id='name-error' className='entrance__error'>
            {errors.name ? `Поле должно быть заполнено и может содержать только латиницу,
              кириллицу, или дефис` : ''}
          </span>
        </label>
        <label className='entrance__label'>Password
          <input
            // id='password'
            type='password'
            className='entrance__input'
            name='password'
            minLength='8'
            maxLength='20'
            required
            autoComplete="off"
            value={values.password || ''}
            onChange={handleChange}
          />
          <span id='password-error' className='entrance__error'>
            {errors.password || ''}
          </span>
        </label>

        {/* <InfoMessage {...infoMessage} /> */}

        <button
          className='entrance__submit-btn app__link'
          type='submit'
          disabled={!isValid}
        >
          {btnName}
        </button>
      </form>
    </section>
  );
}

export default Entrance;
