import React     from 'react'
import PropTypes from 'prop-types'

import "./Heading.scss"

const Heading = ({ title }) => {

  return (
    <div className="heading">
      <h1>{title}</h1>
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Heading;
