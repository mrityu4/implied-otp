import logo from './logo.svg';
import AggrTick from './tick.svg';
import './App.scss';

function App() {
  return (
    <div className="successimpliedotp-container">
    <img src={logo} alt="Logo" />
    <img src={AggrTick} alt="success" />
    <h3>
      You have been {'  '}
      <b>successfully logged in</b>
    </h3>
  </div>
  );
}

export default App;
