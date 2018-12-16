import React from 'react'
import Link from 'next/link'

export default () => (
  <nav className='nav'>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <a href='https://twitter.com/freetimeupdates' target='_blank'>Twitter</a>
      </li>
      <li>
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
  </nav>
);
/*
old () => (
  <nav className='nav'>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/dogs'>Dogs</Link>
      </li>
      <li>
        <Link href='/dogs/shepherd'>Only Shepherds</Link>
      </li>
    </ul>
  </nav>
)
*/
