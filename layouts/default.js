import React from 'react'
import Meta from '../components/meta'
import Logo from '../components/logo'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import "../styles.scss"

export default ({ children, meta }) => (
  <div>
    <Meta props={meta} />
    <div className="body">
      <header>
        <Logo />
        <Header />
        <Navbar />
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
