import Head from 'next/head'

const titleDefault = 'Free Time Updates';
const descriptionDefault = 'Are you tired of paying top dollar for your time updates? Check here for free time updates, all the time, every time.'

export default ({ props = { title, description } }) => (
  <div>
    <Head>
      <title key='title'>{ titleDefault + ( props.title ? ` | ${props.title}` : '' ) }</title>
      <meta key='description' name='description' content={props.description || descriptionDefault} />

      <meta key="og:title" property="og:title" content={ titleDefault + ( props.title ? ` | ${props.title}` : '' ) } />
      <meta key="og:description" property="og:description" content={props.description || descriptionDefault} />
      <meta key="og:image" property="og:image" content='http://www.freetimeupdates.com/static/logo.png' />

      <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />

      <link rel="shortcut icon" href="/static/favicon.ico" type="image/vnd.microsoft.icon" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
  </div>
)
