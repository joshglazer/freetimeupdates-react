import React from 'react'
import Link from 'next/link'
import { stack as Menu } from 'react-burger-menu'

export default () => (
  <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
    <div><Link href='/'><a>Home</a></Link></div>
    <div><Link href='/research'><a>Research</a></Link></div>
    <div><a href='https://twitter.com/freetimeupdates' target='_blank'>Twitter</a></div>
    <div><Link href='/contact'><a>Contact</a></Link></div>
  </Menu>
);
