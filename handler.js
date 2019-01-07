'use strict';
const aws = require('aws-sdk')
const ses = new aws.SES()
const myEmail = process.env.EMAIL
const myDomain = process.env.DOMAIN

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

function generateResponse (code, payload) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(payload)
  }
}

function generateError (code, err) {
  console.log(err)
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(err.message)
  }
}

function generateEmailParams(body) {
  let buffer = new Buffer(body, 'base64');
  body = buffer.toString('ascii');
  body = JSON.parse(body);
  const { email, name, content } = body
  if (!(email && name && content)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\', \'name\', \'content\'.')
  }

  return {
    Source: myEmail,
    Destination: { ToAddresses: [myEmail] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `Message sent from email ${email} by ${name} \nContent: ${content}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `You received a message from ${myDomain}!`
      }
    }
  }
}

module.exports.send = async (event) => {
  try {
    const emailParams = generateEmailParams(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.getTweet = async(event) => {
  try {
    const timeUpdates = [
      `At the tone the time will be [time].`,
      `Guess what?  It's [time].`,
      `Here's another free time update from FreeTimeUpdates.com.  The time is [time].`,
      `Hey, it's [time] somewhere.  And that somewhere is here.  It is [time].`,
      `How ya doin? It's [time]`,
      `I bet you're glad you didn't have to pay to find out that it is [time].`,
      `I never thought it would become [time], but it has.`,
      `I would like to be the first one to tell you that it is [time].`,
      `I'm very glad that it is [time] and not some other time instead.`,
      `If I were to ask you what time it is, and you say it's [time], then you would be correct.`,
      `It is [time] right now.`,
      `It is [time] right now.  Take note, because it won't be [time] again for another 24 hours.`,
      `It is [time]. That is ten minutes later than it was ten minutes ago.`,
      `It's [time] again!`,
      `It's [time] LOL!`,
      `It's [time], and we're busy working to lower the cost and increase the accuracy of your time updates.`,
      `It's [time].`,
      `It's [time].  Make sure you tell your friends.`,
      `Oh, Hi.  I didn't see you there.  Want to know what time it is?  It's [time]`,
      `One time I looked at a clock and it was [time].`,
      `Right now, it is [time].`,
      `RT if you agree that it's currently [time].`,
      `There is a time to every purpose under heaven.  Specifically, [time].`,
      `Ticking away the moments that make up the dull day... at [time].`,
      `Wait... wait... waiiiiiiiit... it's [time]!`,
      `Yikes, [time] really snuck up on me.`,
      `Yo Yo Yo it's [time]`,
      `You know what?  It's [time].`,
      `[time]`,
      `[time] is on my top 20 list of times.`,
    ];
    const update = "test";
    return generateResponse(200, timeUpdates[Math.floor(Math.random() * timeUpdates.length)]);
  } catch (err) {
    return generateError(500, err)
  }
}
