  import React, { useState } from 'react';
  import logo from '../../icons/logo.png';
  import title from '../../icons/title2.png';
  import play from '../../icons/playButton.png'
  import settings from '../../icons/settingsButton.png'
  import style from '../PlayersScreen/styles.module.css'


  export function PlayersScreen({
  setScreenNav,
  setParams,
  params,
  }) {

  const [players, setPlayers] = useState([]);
  const [inputText, setInputText] = useState('');

  const updateInput = (event) => {
    setInputText(event.currentTarget.value);
  }

  const createNewPlayer = (name) => {
    const player = {
      name,
      score: 0,
    }
    return player;
  }

  const playersToDisplay = (
    <div className={style.playerContainer}>
      {players.map((player, index) => {
        const { name = '' } = player;
        return (
          <div className={style.playerTag} key={index}>
            {name}
          </div>
        )
      })}
    </div>
  );

  return (
    <div className={style.playerBody}>
        <img src={title}/>
        <p className={style.playerText}>
            Enter Players Names!
        </p>
        <div className={style.inputContainer}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '30%',
          }}
        >
          <input
            value={inputText}
            style={{
              borderRadius: 25,
              height: 30,
              justifySelf: 'center',
              textAlign: 'center',
            }}
            onChange={updateInput}
            placeholder="player name"
          />
          <div
            className={style.addPlayerBtn}
            style={{
              textAlign: 'center',
              width: 150,
              height: 30,
              borderRadius: '20px',
            }}
            onClick={() => {
              // Create a new player and add it to the players array
              if(inputText && inputText.length) {
                var tempPlayers = players;
                const newPlayer = createNewPlayer(inputText);
                tempPlayers.push(newPlayer);
                setPlayers(tempPlayers);
                setInputText('');
              }
            }}
          >
            <div style={{color: 'white', marginTop: '5px'}}>
              Submit Name
            </div>
          </div>
        </div>
        <div>
          {playersToDisplay}
        </div>
        <div onClick={() => {
          if(players && players.length) {
            console.log("game begins");
            setScreenNav('game');
            setParams({
              ...params,
              players,
              roundNumber: 0,
            });
          }
        }}>
        <img src={play}/>
        </div>
        
        <img
            src={settings}
            onClick={() => {
                setScreenNav('settings')
            }}
        />
    </div>
  );
  }