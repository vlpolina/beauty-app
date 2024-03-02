import React from 'react';
// import Button from './Button.jsx';
import Header from './components/header/header.jsx'
import "./index.css";

export function App(props) {
  return (
    <div className='App'>
      {/* <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <Button /> */}
      <Header />
    </div>
  );
}

// Log to console
console.log('Hello console')