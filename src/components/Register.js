import React from 'react';
import style from './styles/register.module.css';
import Header from './Header';

function Register() {
  return (
    <>
    <Header/>
      <div className={style.formContainer}>
        <form className={style.form}>
          {/* <div className="login-container"> */}
            <div className={style.imageContainer}>
              <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" alt="image"  className={style.img}/>
            </div>
            <div className={style.details}>
            <input type="email" placeholder="email" size='40' className={style.input} />
              <input type="text" placeholder="username" size='40' className={style.input} />
              <input type="text" placeholder="password" className={style.input} size='40' />
            </div>

           <div className={style.register}>
             <button className={style.reg}>Register</button>
             </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
}

export default Register;
