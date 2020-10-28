// import React, { useState } from "react";
import './App.css';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React, { Fragment } from "react";

// import { HomeScreen } from './pages/HomeScreen';
// import { SettingsScreen } from './pages/SettingsScreen';

// export const router = React.createRef()

// function App() {

//   // declare initial screen to view and app navigator
//   const [screenNav, setScreenNav] = useState('home');

//   // return the screen to display based on value held by screenNav
//   const getView = () => {
//     if (screenNav === 'home'){
//       return <HomeScreen setScreenNav={setScreenNav}/>
//     }else if (screenNav === 'settings'){
//       return <SettingsScreen setScreenNav={setScreenNav}/>
//     }
//   }

//   // declare browser router to navigate to screen based on screen choice
// 	return (
// 		<BrowserRouter
// 			ref={(x) => {
// 				router.current = x
// 			}}
// 		>
//       {getView()}
// 		</BrowserRouter>
// 	);
// }

import AddPlayer from "./pages/HomeScreen/AddPlayer";

function App() {
  return (
    <Fragment>
      <body>
        <div className="container">
          <AddPlayer />
        </div>
      </body>
    </Fragment>
  );
}

export default App;
