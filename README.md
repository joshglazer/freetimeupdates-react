# Free Time Updates

This is a React/Next.js website set up to be hosted on a serverless environment on AWS.

The javascript frontend connects to a few AWS Lambda functions written in NodeJS to process the contact form and provide content for the tweets that can be sent from this site.

I went through this tutorial (https://dev.to/adnanrahic/a-crash-course-on-serverless-side-rendering-with-reactjs-nextjs-and-aws-lambda-13ed) and then started customizing the code to get a better understanding of how it all works.

## Authors

- [@joshglazer](https://www.github.com/joshglazer)

## Inspiration

When I built this application I was gearing up for a React/Next.js project at the company where I worked at the time, and wanted to tinker with those technologies before starting a "real" project. A few years before, I had made a joke/parody website called Free Time Updates using Drupal, but was not able to dedicate time towards keeping up with the security updates, so I had to take the site offline in order to make sure my hosting account was not vulnerable to attacks. I decided to recreate that website using Next.js and AWS Lambda as a learning experience and to gain a better understanding of the technologies used in this application.

## Demo

A live demo of Free Time Updateas is available at https://www.freetimeupdates.com/.

## Run Locally

Clone the project

```bash
  git clone git@github.com:joshglazer/freetimeupdates-react.git
```

Go to the project directory

```bash
  cd freetimeupdates-react
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Deployment

Before you deploy this application, make sure you set up the [AWS Command Line Interface](https://aws.amazon.com/cli/) on your local machine.

To deploy this project run

```bash
  npm run deploy
```

## Development Process

### Design

When I thought of this website, I pictured the old infomercials from the 90's with a blue and yellow screen, an 800 number, and a note about how many easy payments you can make in order to purchase the product that is being sold. I used that blue and yellow color scheme as inspiration for my design.

### Integrations

This application integrates with a few custom AWS Lambda functions to process the content form and provide some content to the front-end.

It also uses google charts to present some of the information in the "research" section of the site.
