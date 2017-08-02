import React from 'react'
import PropTypes from 'prop-types'

import "./Page.scss"

const Page = ({ name, title, backgroundImage, backgroundPosition, subtitle, contents, iconRows }) => {

  const style = {
    backgroundImage: `url('img/${backgroundImage}.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: backgroundPosition || 'center center',
    borderBottom: '2px solid white',
    color: '#fefefe',
    height: '100vh'
  }


  const generateContents = (contents) => {
    if (!contents) return null;
    return contents.map((content, idx) => {
      // data is static so we can interpolate html strings safely
      return <p key={idx} dangerouslySetInnerHTML={{__html: content}}></p>
    })
  }

  return (
    <section id={name.toLowerCase()} className="page" style={style}>
      <div className="overlay">

        <div className="titles">
          <h1>{title}</h1>
          {subtitle ? <h2>{subtitle}</h2> : null}
        </div>

        <div className="contents">
          <hr />
          {generateContents(contents)}
        </div>
      </div>
    </section>
  )
}

Page.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundPosition: PropTypes.string,
  subtitle: PropTypes.string,
  contents: PropTypes.array,
  iconRows: PropTypes.array
}

export default Page;
