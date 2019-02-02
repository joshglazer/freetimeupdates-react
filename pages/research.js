import React, { Component } from 'react'
import Link from 'next/link'

import { Chart } from 'react-google-charts';

import Default from '../layouts/default'

const meta = {
  title: 'Research',
  description: 'Our time scientists are hard at work performing cutting-edge time research about time. We have made our research available for you to review.'
}

const optionsBase = {
  colors: ['#faf06b', '#bfdef2'],
  backgroundColor: 'transparent',
  legend: {
    position: 'none',
  },
}

const optionsColumnChart = {
  ...optionsBase,
  vAxis: {
    title: 'Time of Day',
    gridlines: {
        color: 'transparent'
    },
    baselineColor: '#faf06b',
    textStyle: {
      color: '#faf06b'
    },
    titleTextStyle: {
      color: '#faf06b',
      fontSize: 18,
    }
  },
  hAxis: {
    title: 'Hours Passed in the Day',
    gridlines: {
      color: 'transparent'
    },
    baselineColor: '#faf06b',
    textStyle: {
      color: '#faf06b',
    },
    titleTextStyle: {
      color: '#faf06b',
      fontSize: 18,
    }
  },
}

const optionsPieChart = {
  ...optionsBase,
  chartArea: {
    width: '100%',
    height: '100%'
  },
  pieSliceTextStyle: {
    color: 'black',
  },
  is3D: true,
  pieSliceText: 'label',
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
              options={optionsColumnChart}
              data={[
                ['Hours Passed in the Day', 'Time of Day', { role: "tooltip", type: "string", p: { html: true } }],
                ['0', 12, 'When 0 hours have passed, it is 12AM'],
                ['1', 1, 'When 1 hour has passed, it is 1AM'],
                ['2', 2, 'When 2 hours have passed, it is 2AM'],
                ['3', 3, 'When 3 hours have passed, it is 3AM'],
                ['4', 4, 'When 4 hours have passed, it is 4AM'],
                ['5', 5, 'When 5 hours have passed, it is 5AM'],
                ['6', 6, 'When 6 hours have passed, it is 6AM'],
                ['7', 7, 'When 7 hours have passed, it is 7AM'],
                ['8', 8, 'When 8 hours have passed, it is 8AM'],
                ['9', 9, 'When 9 hours have passed, it is 9AM'],
                ['10', 10, 'When 10 hours have passed, it is 10AM'],
                ['11', 11, 'When 11 hours have passed, it is 11AM'],
                ['12', 12, 'When 12 hours have passed, it is 12PM'],
                ['13', 1, 'When 13 hours have passed, it is 1PM'],
                ['14', 2, 'When 14 hours have passed, it is 2PM'],
                ['15', 3, 'When 15 hours have passed, it is 3PM'],
                ['16', 4, 'When 16 hours have passed, it is 4PM'],
                ['17', 5, 'When 17 hours have passed, it is 5PM'],
                ['18', 6, 'When 18 hours have passed, it is 6PM'],
                ['19', 7, 'When 19 hours have passed, it is 7PM'],
                ['20', 8, 'When 20 hours have passed, it is 8PM'],
                ['21', 9, 'When 21 hours have passed, it is 9PM'],
                ['22', 10, 'When 22 hours have passed, it is 10PM'],
                ['23', 11, 'When 23 hours have passed, it is 11PM'],
              ]}
            />
          </div>
          <div className="researchChart">
            <h3>Percentage of time of day during AM vs. PM</h3>
            <Chart
              chartType="PieChart"
              height={400}
              width={"100%"}
              options={optionsPieChart}
              data={[
                ['Type', 'Percent', { role: "tooltip", type: "string", p: { html: true } }],
                ['AM', 12, '50% of all hours fall during the AM portion of the day'],
                ['PM', 12,  '50% of all hours fall during the AM portion of the day'],
              ]}
            />
          </div>
        </div>
      </Default>
    )
  }
}

export default ResearchPage
