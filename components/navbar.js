import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
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
  </div>
);
