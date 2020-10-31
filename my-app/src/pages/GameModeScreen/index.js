import React, { useState } from 'react';
import logo from '../../icons/logo.png';
import title from '../../icons/title2.png';
import play from '../../icons/playButton.png';
import style from '../GameModeScreen/styles.module.css';


export function GameModeScreen({
  setScreenNav,
  setParams,
  params
}) {

    const [gameMode, setGameMode] = useState(false);

    return (
        <div className="app">
            <head>
                <link rel="icon" href={logo}/>
                <title>Don't Drown</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head> 
            <div className={style.body}>
                <img src={title}/>
                <div
                    className={style.adultBtn}
                    style={{
                        width: '200px',
                        height: '50px',
                        borderRadius: '25px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: '30px',
                    }}
                    onClick={() =>{
                        setGameMode(!gameMode)
                    }}
                >
                    Enable Adult Content
                <input type="checkbox" checked={gameMode}>
                    {/* <span class="slider round"></span> */}
                </input>
            </div>
          <div class="center">
                <div onClick={() => {
                    setScreenNav('players')
                    setParams({
                        ...params,
                        isAdultContent: gameMode,
                    })
                }}>
                    <img src={play}/>
                </div>
          </div>
          <div class="col-4 row">
              <button class="button testbutton" onClick={() => {setScreenNav('home')}}>Back</button>
            </div>
        </div>
        // </div>
        

    );
}

