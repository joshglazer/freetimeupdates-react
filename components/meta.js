import Head from 'next/head'
export default ({ props = { title, description } }) => (
  <div>
    <Head>
      <title>{ props.title || 'Free Time Updates' }</title>
      <meta name='description' content={props.description || 'Are you tired of paying top dollar for your time updates? Check here for free time updates, all the time, every time.'} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet" />
    </Head>
  </div>
)
