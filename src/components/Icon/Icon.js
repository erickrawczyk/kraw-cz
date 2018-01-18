import React       from 'react';
import PropTypes   from 'prop-types';
import { Tooltip } from 'react-tippy';

import "./Icon.scss"

const Icon = ({ icon, link, tooltip, direct, idx }) => {

  const tooltipElm = (
    <div>
      <span>{tooltip}&nbsp;</span>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
        <i className="fa fa-fw fa-external-link" aria-hidden="true"></i>
      </a>
    </div>
  );

  const tooltipConfig = {
    arrow: true,
    arrowSize: 'big',
    size: 'big',
    interactive: true,
    html: tooltipElm,
    hideDuration: '500ms',
    theme: 'transparent'
  }

  return (
    <div className="icon">
      <Tooltip {...tooltipConfig}>
        <div className="icon">
          <a href={direct ? link : null} target="_blank" rel="noopener noreferrer" style={{color: 'white'}} >
            <i className={`devicon devicon-${icon}-plain`}></i>
          </a>
        </div>
      </Tooltip>
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  direct: PropTypes.bool,
}

export default Icon;
