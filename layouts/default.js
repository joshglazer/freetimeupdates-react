import React from 'react'
import { ToastContainer } from 'react-toastify';

import Meta from '../components/meta'
import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'

import "react-toastify/dist/ReactToastify.css";
import 'react-block-ui/style.css';

import "../styles.scss"

export default ({ children, meta }) => (
  <div id="outer-container">
    <Meta props={meta} />
    <Menu />
    <div className="body" id="page-wrap">
      <Header />
      <section>
        { children }
      </section>
      <Footer />
    </div>
    <ToastContainer />
  </div>
)
