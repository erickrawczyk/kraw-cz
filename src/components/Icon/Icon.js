import React from 'react';
import PropTypes from 'prop-types';

import './Icon.css';

const Icon = ({ icon, link, tooltip }) => {
  return (
    <div className="icon">
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
        <i className={`devicon devicon-${icon}-plain`}></i>
      </a>
      <b className="label">{tooltip}</b>
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  direct: PropTypes.bool,
};

export default Icon;
