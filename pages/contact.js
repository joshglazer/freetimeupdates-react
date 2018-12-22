import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'
import { toast } from 'react-toastify';
import BlockUi from 'react-block-ui';

const meta = {  }

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      curTime: null,
      name: "",
      email: "",
      content: "",
      blocking: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setDate() {
    this.setState({
      curTime : new Date().toLocaleTimeString(),
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
    const {name, email, content} = this.state;
    let errors = [];
    if (!name) {
      errors.push('Name is required')
    }
    if (!email) {
      errors.push('Email is required')
    }
    if (!content) {
      errors.push('Your message is required')
    }
    const self = this;
    if (errors.length) {
      errors.map((item) => {
        toast.error(item, {
          position: toast.POSITION.TOP_CENTER
        });
      })
    } else {
      this.setState({blocking: true});
      axios.post('/email/send', {
        name: name,
        email: email,
        content: content,
      })
      .then(function (response) {
        toast.success("Thanks for getting in touch!  We'll get back to you soon.", {
          position: toast.POSITION.TOP_CENTER
        });
        self.setState({
          name: '',
          email: '',
          content: '',
        })
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Your information could not be sent.  Please try again.", {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .finally(() => {
        self.setState({blocking: false});
      });
    }
  }


  render () {
    return (
      <Default meta={meta}>
        <div>
          <h2>Contact</h2>
          <BlockUi tag="div" blocking={this.state.blocking} style={{paddingBottom: 10}}>
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
          </BlockUi>
        </div>
      </Default>
    )
  }
}

export default IndexPage
