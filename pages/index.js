import React, { Component } from 'react'
import axios from 'axios'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

import Default from '../layouts/default'

const meta = {  }

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      curTime: null,
      tweet: null,
      tweetWithTime: null,
    }
  }

  setTime() {
    const curTime = this.getTime();
    let tweetWithTime;
    if (this.state.tweet) {
      tweetWithTime = this.state.tweet.replace('[time]', curTime);
    };
    this.setState(
      {
        curTime : this.getTime(),
        tweetWithTime: tweetWithTime,
      }
    )
  }

  getTime() {
    return new Date().toLocaleTimeString();
  }

  componentDidMount () {
    this.setTime();
    this.myInterval = setInterval( () => {
      this.setTime();
    },1000);
    this.getTweet();
  }

  getTweet() {
    var self = this;
    let tweet;
    axios.get('/api/getTweet')
      .then(function (response) {
        tweet = response.data;
      }).catch(function(err) {
        console.log(err);
        tweet = `It's [time].`
      }).finally(function() {
        self.setState({
          tweet: tweet,
        });
      });
  }

  componentWillUnmount(){
    clearInterval(this.myInterval);
  }

  render () {
    return (
      <Default meta={meta}>
        <h2>Welcome to Free Time Updates</h2>
        <div>Are you tired of paying top dollar for your time updates? Check here for free time updates, all the time, every time.</div>
        {this.state.curTime &&
          <div className="homepageTime">
            <div className="homepageTimeTitle">Right now it is</div>
            <div className="homepageTimeTime">{this.state.curTime}</div>
            {this.state.tweetWithTime &&
              <div className="SocialMediaShareButtons">
                <div>Share On:</div>
                <TwitterShareButton
                  title={this.state.tweetWithTime}
                  url={window.location.href}
                  via="FreeTimeUpdates"
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <FacebookShareButton
                  quote={this.state.tweetWithTime}
                  url={window.location.href}
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </div>
            }
          </div>
        }
      </Default>
    )
  }
}

export default IndexPage
