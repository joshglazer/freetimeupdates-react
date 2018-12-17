import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'
const meta = {  }

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      curTime: this.getDate(),
    }
  }

  setDate() {
    this.setState({
      curTime : this.getDate(),
    })
  }

  getDate() {
    return new Date().toLocaleTimeString();
  }

  componentDidMount () {
    this.setDate();
    setInterval( () => {
      this.setDate();
    },1000)
  }


  render () {
    return (
      <Default meta={meta}>
        <h2>Welcome to Free Time Updates</h2>
        <div className="homepageTime">
          <div className="homepageTimeTitle">Right now it is</div>
          <div className="homepageTimeTime">{this.state.curTime}</div>
        </div>
      </Default>
    )
  }
}

export default IndexPage
