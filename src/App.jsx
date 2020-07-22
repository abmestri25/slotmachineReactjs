import React from 'react';
import SlotMachine from './SlotMachine';
import './App.css'

const App = () => {
    return(
        <>
        <div className="container">
            <h1 className="title" >Welcome to <span className="heading" >Slot Machine</span> Game</h1>
            <div className="box">
                <SlotMachine x="💛" y="💛" z="💛"  />
                <SlotMachine x="🖤" y="🖤" z="💛"  />
                

            </div>
        </div>
        </>
    )
};

export default App;