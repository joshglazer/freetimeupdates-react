import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'
const meta = {  }

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      curTime: null,
      name: "",
      email: "",
      content: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setDate() {
    this.setState({
      curTime : new Date().toLocaleString(),
    })
  }

  componentDidMount () {
    this.setDate();
    setInterval( () => {
      this.setDate();
    },1000)
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/email/send', {
      name: this.state.name,
      email: this.state.email,
      content: this.state.content,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render () {
    return (
      <Default meta={meta}>
        <div>
          <h2>Contact</h2>
          <p>Questions, comments, suggestions? Fill out the form below and send them over to us.</p>
          <p>Oh, and by the way, it is {this.state.curTime} right now.</p>
          <form onSubmit={this.handleSubmit}>
            <div className="formField">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                value={this.state.name}
                onChange={event => this.setState({name: event.target.value})}
              />
            </div>
            <div className="formField">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your email address"
                value={this.state.email}
                onChange={event => this.setState({email: event.target.value})}
              />
            </div>
            <div className="formField">
              <textarea
                type="text"
                name="content"
                id="content"
                placeholder="What do you want to tell us?"
                rows="3"
                value={this.state.content}
                onChange={event => this.setState({content: event.target.value})}
              />
            </div>
            <div className="formField">
              <input type="submit" value="Go" />
            </div>
          </form>
        </div>
      </Default>
    )
  }
}

export default IndexPage
