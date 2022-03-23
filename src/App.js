import { useEffect, useState } from 'react';
import logo from './logo.svg';
import AggrTick from './tick.svg';
import './App.scss';

function App() {
  const STATUS={
    ERR:'ERR',
    SUCCESS:'SUCCESS',
  }
  const [status, setStatus] =useState();

  useEffect(()=>{
    if(window.location.href.includes('error')){
      setStatus(STATUS.ERR);
    }
    else setStatus(STATUS.SUCCESS);
  },[]);
  
  return (
    <div className="successimpliedotp-container">
    <img src={logo} alt="Logo" />
    {status===STATUS.SUCCESS?(
      <>
      <img src={AggrTick} alt="success" />
      <h3>
        You have been {'  '}
        <b>successfully logged in</b>
      </h3>
    </>
    ):(
      <>
      <img src={AggrTick} alt="fail" />
      <h3 className='fail'>
        You have been {'  '}
        <b>logged out</b>
      </h3>
    </>
    )}
  </div>
  );
}

export default App;
