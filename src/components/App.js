import React from 'react'

// import NavBar from './NavBar'
import Page from './Page'

import PAGES from '../pages.js'
import './App.scss';

const [landingPage, ...pages] = PAGES

const App = () => (
  <div>
    {/* <NavBar /> */}
    <Page {...landingPage} key="landing"/>
    {pages.map((page, idx) => <Page {...page} idx={idx} key={page.name}/>)}
  </div>
)

export default App;
