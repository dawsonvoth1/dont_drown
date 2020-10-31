import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
//import React, { Fragment } from "react";

import { HomeScreen } from './pages/HomeScreen';
import { SettingsScreen } from './pages/SettingsScreen';
import { GameModeScreen } from './pages/GameModeScreen';
import { PlayersScreen } from './pages/PlayersScreen';
import { GameScreen } from './pages/GameScreen';

export const router = React.createRef()

function App() {

  // declare initial screen to view and app navigator
  const [screenNav, setScreenNav] = useState('home');
  const [params, setParams] = useState(null);

  // return the screen to display based on value held by screenNav
  const getView = () => {
    switch(screenNav) {
      case 'settings':
        return <SettingsScreen setScreenNav={setScreenNav}/>
      case 'players':
        return <PlayersScreen setScreenNav={setScreenNav} params={params} setParams={setParams}/>
      case 'game':
        return <GameScreen setScreenNav={setScreenNav} params={params} setParams={setParams}/>
      case 'gamemode':
        return <GameModeScreen setScreenNav={setScreenNav} params={params} setParams={setParams}/>
      default: return <HomeScreen setScreenNav={setScreenNav}/>
    }
  }

  // declare browser router to navigate to screen based on screen choice
	return (
		<BrowserRouter
			ref={(x) => {
				router.current = x
			}}
		>
      {getView()}
		</BrowserRouter>
	);
}


export default App;
