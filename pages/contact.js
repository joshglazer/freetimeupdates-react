import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'
const meta = {  }

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      curTime: null,
    }
  }

  setDate() {
    this.setState({
      curTime : new Date().toLocaleString()
    })
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
        <div>
          <p>Contact Page Goes Here!</p>
        </div>
      </Default>
    )
  }
}

export default IndexPage
