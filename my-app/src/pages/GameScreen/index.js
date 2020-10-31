import React, { useState } from 'react';
import logo from '../../icons/logo.png';
import title from '../../icons/title2.png';
import play from '../../icons/playButton.png'
import settings from '../../icons/settingsButton.png'
import style from '../PlayersScreen/styles.module.css'


export function GameScreen({
    setScreenNav,
    params,
    }) {

    // passed params include the players
    console.log('pla',params);

    /**
     * Needed functionality:
     * Randomly select player / players (primary player CANNOT already have been chosen)
     * Randomly select question that hasn't already been used
     * Prompt players questions and wait upon response
     * Update data / variables based on validity of response
     */





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
                LET&apos;S GO!!!!
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
                Submit Name
                </div>
            </div>
        </div>
    );
}