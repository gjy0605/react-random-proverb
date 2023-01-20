import logo from './logo.svg';
import './App.css';
const proverbs = ['가나다', '라마바', '아사자', '차카타', '타파하']
const getRandomIndex = (length) => {
  return parseInt(Math.random() * length)
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
