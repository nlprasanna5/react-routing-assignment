import React from 'react';
import Header from './Header';
import style from './styles/home.module.css';


function Home(){
  return(
    <>
    <Header/>
    <div className={style.homeContainer}>
      <h2 className={style.welcome}>Welcome to home page</h2>
      <p className={style.say}>This website tells you redirecting from one page to another by using routing</p>
      </div>
    </>
  )
}

export default Home;