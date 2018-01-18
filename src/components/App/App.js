import React  from 'react'
import Page   from '../Page/Page'
import './App.scss';

const App = ({ pages }) => {
  return (
    <div>
      {pages.map((page, idx) => <Page {...page} isFirst={idx === 0} isLast={idx === pages.length - 1} key={page.name}/>)}
    </div>
  )
}

export default App;
