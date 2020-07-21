import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const name = 'Reeeeact';
    return (
        <>
            {name === 'React' ? (
                <h1>{name} is React!!</h1>
            ) : (
                <h2>{name} is not React.</h2>
            )}
        </>
  );
}

export default App;
