import React from 'react'

// import NavBar from './NavBar'
import Page from '../Page/Page'

import STATE from '../../state.js'
import './App.scss';

const [landingPage, ...pages] = STATE

const App = () => (
  <div>
    {/* <NavBar /> */}
    <Page {...landingPage} key="landing"/>
    {pages.map((page, idx) => <Page {...page} idx={idx} key={page.name}/>)}
  </div>
)

export default App;
