import React from "react";
import Link from "next/link";

const header = () => (
  <header>
    <Link href="/">
      <a className="logo">
        <img src="/static/logo.png" id="logo" alt="Free Time Updates" />
      </a>
    </Link>
    <h1>Free Time Updates</h1>
  </header>
);

export default header;
