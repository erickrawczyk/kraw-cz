import React from 'react'
import PropTypes from 'prop-types'

import Contents from '../Contents/Contents'
import Titles from '../Titles/Titles'

import "./Page.scss"

const Page = ({ name, title, backgroundImage, backgroundPosition, subtitle, contents, iconRows }) => {

  const style = {
    backgroundImage: `url('img/${backgroundImage}.jpg')`,
    backgroundPosition: backgroundPosition || 'center center',
  }

  return (
    <section id={name.toLowerCase()} className="page" style={style}>
      <div className="overlay">

        <Titles title={title} subtitle={subtitle} />

        { contents && contents.length ? <Contents contents={contents} /> : null }

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
