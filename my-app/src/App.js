import './App.css';
// import ReactDOM from 'react-dom';
//import { LineChart, Line } from 'recharts';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
//MUI
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
//import CollapsibleTable from "./table/table";


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
    let pace = (run.time / run.distance) / 60 // formula for pace && actually puts it where it needs to be
    console.log(pace);
    run.pace = `${Math.floor(pace)}' ${Math.round((pace - Math.floor(pace)) * 60)}"`; //formula for pace notation
    console.log(run.id, run.pace);
  }

  console.log(runs);

  let data = [
    { distance: 5, time: 2400 },
    { distance: 10, time: 4800 },
    { distance: 1, time: 320 },
    { distance: 8, time: 3600 },
    { distance: 5, time: 2100 },
    { distance: 13.1, time: 6090 },
  ]

  const data2012 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];

  const data2013 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 }
  ];

  const data2014 = [
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 }
  ];

  const data2015 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 }
  ];

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1></h1>
      </header> */}
      {/* example graph */}
      <div>
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x}k`)}
          />
          <VictoryStack
            colorScale={"warm"}
          >
            <VictoryBar
              data={data2012}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2013}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2014}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2015}
              x={"quarter"}
              y={"earnings"}
            />
          </VictoryStack>
        </VictoryChart>
        {/* <CollapsibleTable/> */}
      </div>
      {/* my graphs */}
      <div>
        <VictoryChart
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}

          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${(x / 60)}min`)}
          />
          <VictoryBar
            data={data}
            x="distance"
            y="time"
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default App;
