import React from 'react';
import BarGraph from './components/BarGraph';
import PieChart from './components/PieChart';

const seriesData = [{name: 'Mon', value: 250},{name: 'Tue', value: 300}];


function App() {
  return (
    <div>
      <PieChart seriesData={seriesData}/>
      <BarGraph />
    </div>
  )
}

export default App
