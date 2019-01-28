import React, { Component } from 'react'
import Link from 'next/link'

import { Chart } from 'react-google-charts';

import Default from '../layouts/default'
const meta = {  }
const options = {
  colors: ['#faf06b', '#bfdef2'],
  is3D: true,
  backgroundColor: 'transparent',
  vAxis: {
    gridlines: {
        color: 'transparent'
    },
    baselineColor: '#faf06b',
    textStyle:{color: '#faf06b'},
  },
  hAxis: {
    gridlines: {
        color: 'transparent'
    },
    baselineColor: '#faf06b',
    textStyle:{color: '#faf06b'},
  },
  pieSliceTextStyle: {
    color: 'black',
  },
  tooltip: {
    isHtml: true
  },
  legend: {
    textStyle: {
      color: '#faf06b'
    }
  },
}

class ResearchPage extends Component {

  render () {
    return (
      <Default meta={meta}>
        <h2>Research</h2>
        <div>
          <div>
            Our time scientists are hard at work performing cutting-edge time research about time.
            We have made our research available below for you to review.  If you have any ideas for
            future research projects, <Link href='/contact'><a>contact us</a></Link> and let us know.
          </div>
          <div className="researchChart">
            <h3>The time of day based on how many hours have passed</h3>
            <Chart
              chartType="ColumnChart"
              height={400}
              width={"100%"}
              legendToggle
              options={options}
              data={[
                ['Hours Passed in the day', 'Time of Day'],
                ['0', 12],
                ['1', 1],
                ['2', 2],
                ['3', 3],
                ['4', 4],
                ['5', 5],
                ['6', 6],
                ['7', 7],
                ['8', 8],
                ['9', 9],
                ['10', 10],
                ['11', 11],
                ['12', 12],
                ['13', 1],
                ['14', 2],
                ['15', 3],
                ['16', 4],
                ['17', 5],
                ['18', 6],
                ['19', 7],
                ['20', 8],
                ['21', 9],
                ['22', 10],
                ['23', 11],
              ]}
            />
          </div>
          <div className="researchChart">
            <h3>Percentage of time of day during AM vs. PM</h3>
            <Chart
              chartType="PieChart"
              height={400}
              width={"100%"}
              options={options}
              data={[
                ['Type', 'Percent'],
                ['AM', 12],
                ['PM', 12],
              ]}
            />
          </div>
        </div>
      </Default>
    )
  }
}

export default ResearchPage
