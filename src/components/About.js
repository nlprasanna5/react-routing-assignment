import React from 'react';
import style from'./styles/about.module.css';
import Header from './Header';

function About() {
  return (
    <>
    <Header/>
      <div>
        <div>
          <h2 className={style.text}>About us</h2>
        </div>

        
        <div className={style.sectionContainer}>
          <div className={style.img}>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
              className={style.image}
            />
            <p>Age : 22</p>
            <p>Location : Kadapa</p>
          </div>
          <div className={style.right}>
            <div>
              <p>Lakshmi Prasanna</p>
              <p className={style.content}>
                I am passionate about Front end development.I am from
                Kadapa,Andhrapradesh.I graduated from RGUKT,RK Valley.I am passionate about Front end development.I am from
                Kadapa,Andhrapradesh.I graduated from RGUKT,RK Valley
              </p>
            </div>
            <div className={style.cardsContainer}>
              <div className={style.card}>
              <p>Skills :</p>
               <ul className={style.list}>
                 <li>Web developer</li>
                 <li>HTML</li>
                 <li>CSS</li> 
               </ul>
              </div>

              <div className={style.card}>
                <p>Skills :</p>
                <ul className={style.list}>
                 <li>Web developer</li>
                 <li>HTML</li>
                 <li>CSS</li>
               </ul>
              </div>

              <div className={style.card}>
                <p>Skills :</p>
                <ul className={style.list}>
                 <li>Web developer</li>
                 <li>HTML</li>
                 <li>CSS</li>
               </ul>
               
              </div>

            </div>
          </div>
       
        </div>
      </div>
    </>
  );
}

export default About;
