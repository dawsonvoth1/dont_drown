import React from 'react';
import logo from '../../icons/logo.svg';
import styles from './styles.css';

export function SettingsScreen({
  setScreenNav,
}) {
  return (
    <html lang="en">
    <div className="App">
      <link href="styles.css" rel="stylesheet"></link>
      <head style={{backgroundColor: 'rgb(8, 44, 78)'}}>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
        <link href={styles} rel="stylesheet"></link>
      </head>
      <body style={{backgroundColor: 'rgb(8, 44, 78)'}}>
        <div class="col-4 container">
          <div class="align-self-center">
            <h1 style={{color:'white'}}>SETTINGS</h1>
            <form>
              <label for="sfx" style={{color: 'white'}}>SFX</label>
              <input type="range" id="sfx" name="sfx" min="0" max ="10" style={{backgroundColor: 'rgb(8, 44, 78)'}}></input>
              <label for="music" style={{color: 'white'}}>Music</label>
              <input type="range" id="music" name="music" min="0" max ="10" style={{backgroundColor: 'rgb(8, 44, 78)'}}></input>
            </form>
            <div class="col-4 row">
              <button class="button testbutton" href="">End Game?</button>
            </div>
            <br></br>
            <div class="col-4 row">
              <button class="button testbutton" onClick={() => {setScreenNav('home')}}>Back</button>
            </div>
          </div>
        </div>
      </body>
    </div>
    </html>
  );
}