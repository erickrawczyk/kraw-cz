import React from 'react'
import PropTypes from 'prop-types'

import "./Titles.scss"

const Titles = ({ title, subtitle }) => {

  return (
    <div className="titles">
      <h1>{title}</h1>
      {subtitle ? <h2>{subtitle}</h2> : null}
    </div>
  )
}

Titles.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default Titles;
