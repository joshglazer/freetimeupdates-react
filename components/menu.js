import React from 'react'
import Link from 'next/link'
import { elastic as Menu } from 'react-burger-menu'

export default () => (
  <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
    <Link href='/'><a className="menu-item">Home</a></Link>
    <a href='https://twitter.com/freetimeupdates' target='_blank'>Twitter</a>
    <Link href='/contact'><a className="menu-item">Contact</a></Link>
  </Menu>
);
