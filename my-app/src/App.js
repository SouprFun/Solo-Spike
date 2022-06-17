import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
//import { LineChart, Line } from 'recharts';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';


function App() {
  const runs = [
    { id: 1, distance: 5, time: 2400, pace: 0, date: '1-20-2022', cat: "long", note: "this was fun" },
    { id: 2, distance: 10, time: 4800, pace: 0, date: '1-22-2022', cat: "long", note: "this was long" },
    { id: 3, distance: 1, time: 320, pace: 0, date: '1-24-2022', cat: "fast", note: "this was fast" },
    { id: 4, distance: 8, time: 3600, pace: 0, date: '1-26-2022', cat: "long", note: "this was fun" },
    { id: 5, distance: 5, time: 2100, pace: 0, date: '2-20-2022', cat: "long", note: "this was fun" },
    { id: 6, distance: 13.1, time: 6090, pace: 0, date: '2-23-2022', cat: "long", note: "this was fun" },
  ]

  for (let run of runs) {
    run.pace = (run.time / run.distance) / 60 // formula for pace && actually puts it where it needs to be
    console.log(run.id, run.pace);
  }

  console.log(runs);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>

      </body>

    </div>
  );
}

export default App;
