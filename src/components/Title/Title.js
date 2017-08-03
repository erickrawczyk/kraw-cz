import React     from 'react'
import PropTypes from 'prop-types'

import "./Title.scss"

const Title = ({ title, subtitle }) => {

  return (
    <div className="title">
      <h1>{title}</h1>
      {subtitle ? <h2>{subtitle}</h2> : null}
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default Title;
