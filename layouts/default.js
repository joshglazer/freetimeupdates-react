import React from 'react'
import Meta from '../components/meta'
import Logo from '../components/logo'
import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'

import "../styles.scss"

export default ({ children, meta }) => (
  <div id="outer-container">
    <Meta props={meta} />
    <Menu />
    <div className="body" id="page-wrap">
      <header>
        <Logo />
        <Header />
      </header>
      <section>
        { children }
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
)