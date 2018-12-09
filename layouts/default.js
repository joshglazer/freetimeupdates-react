import React from 'react'
import Meta from '../components/meta'
import Header from '../components/header'
import Navbar from '../components/navbar'
export default ({ children, meta }) => (
  <div>
    <Meta props={meta} />
    <Header />
    <Navbar />
    { children }
  </div>
)
