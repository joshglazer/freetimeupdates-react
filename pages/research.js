import React, { Component } from 'react'
import Link from 'next/link'

import { BarChart, PieChart } from 'react-easy-chart';

import Default from '../layouts/default'
const meta = {  }

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
            <BarChart
              axisLabels={{
                x: 'Hours Passed in the day',
                y: 'Time of Day'
              }}
              axes
              height={250}
              width={650}
              data={[
                {x: '0', y: 12},
                {x: '1', y: 1},
                {x: '2', y: 2},
                {x: '3', y: 3},
                {x: '4', y: 4},
                {x: '5', y: 5},
                {x: '6', y: 6},
                {x: '7', y: 7},
                {x: '8', y: 8},
                {x: '9', y: 9},
                {x: '10', y: 10},
                {x: '11', y: 11},
                {x: '12', y: 12},
                {x: '13', y: 1},
                {x: '14', y: 2},
                {x: '15', y: 3},
                {x: '16', y: 4},
                {x: '17', y: 5},
                {x: '18', y: 6},
                {x: '19', y: 7},
                {x: '20', y: 8},
                {x: '21', y: 9},
                {x: '22', y: 10},
                {x: '23', y: 11},
              ]}
            />
          </div>
          <div className="researchChart">
            <h3>Percentage of time of day during AM vs. PM</h3>
            <PieChart
              labels
              data={[
                { key: 'AM', value: 12 },
                { key: 'PM', value: 12 },
              ]}
            />
          </div>
        </div>
      </Default>
    )
  }
}

export default ResearchPage
