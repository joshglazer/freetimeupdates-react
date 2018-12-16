import React from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

export default () => (
  <Menu right>
    <Link className="menu-item" href='/'>Home</Link>
    <a href='https://twitter.com/freetimeupdates' target='_blank'>Twitter</a>
    <Link className="menu-item" href='/contact'>Contact</Link>
  </Menu>
);
