import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import initialData from './input/1.json';
// The wrapper exports only a default component class that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props). All other
// interfaces like Options come from the Highcharts module itself.

const options: any = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Stacked column chart'
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',

      }
    }
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,

    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: false
      }
    }
  },
  series: initialData.histogramList.map(elem => {
    return {
      name: elem.date,
      data: elem.partyCountList.map(vote => {
        return [
          "data" [vote.count]
        ]
        }
      })

    }
  })  

}


  // series: [{
  //   name: 'John',
  //   data: [5, 3, 4, 7, 2]
  // }, {
  //   name: 'Jane',
  //   data: [2, 2, 3, 2, 1]
  // }, {
  //   name: 'Joe',
  //   data: [3, 4, 4, 2, 5]
  // }]


// React supports function components as a simple way to write components that
// only contain a render method without any state (the App component in this
// example).

const App = (props: HighchartsReact.Props) => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
    {...props}
  />
</div>

export default App; 