import React, { Fragment } from 'react';
import logo from '../../icons/logo.png';
import title from '../../icons/title2.png';
import play from '../../icons/playButton.png'
import settings from '../../icons/settingsButton.png'
import style from './styles.module.css'

import AddPlayer from "./AddPlayer";

export function HomeScreen({
  setScreenNav,
}) {
  return (
    


    <div className="app">
        <head>
            <link rel="icon" href={logo}/>
            <title>Don't Drown</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <div>
            <body className={style.body}>
                <img src={title}/>
                
                <p>
                    welcome!
                </p>
                <img src={play} onClick={() => {
                    setScreenNav('gamemode')
                }}/>
                
                <Fragment>
                    <div className="container">
                        <AddPlayer />
                    </div>
                </Fragment>
                
                <img src={settings} onClick={() => {
                    setScreenNav('settings')
                }}/>
            </body>
        </div>
  
    </div>
  );
}