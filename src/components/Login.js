import React from 'react';
import style from './styles/login.module.css';
import Header from './Header';
// import {Link,Outlet} from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function Login() {
    const navigate = useNavigate();

    function redirectToRegisterPage() {
        navigate('/register');

    }
    return (
        <>
            <Header />
            <div className={style.formContainer}>
                <form className={style.form}>
                    {/* <div className="login-container"> */}
                    <div className={style.imageContainer}>
                        <img src="https://i.pinimg.com/originals/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg" alt="image" className={style.img} />
                    </div>
                    <div className={style.details}>
                        <input type="text" placeholder="username" size='40' className={style.input} />
                        <input type="text" placeholder="password" className={style.input} size='40' />
                    </div>

                    <div className={style.account}>
                        <div className={style.register}>
                            <p className={style.accountPara}>Don't have an account?</p>
                            {/* <Link to='register'>Register</Link>     */}
                            <p className={style.registerPara} onClick={redirectToRegisterPage} >Register</p>

                        </div>
                        {/* <Outlet/> */}
                        <div className={style.btn}>
                            <button className={style.button}>Login</button>
                        </div>
                    </div>
                    {/* </div> */}
                </form>
            </div>
        </>
    );
}

export default Login;
