import React     from 'react';
import PropTypes from 'prop-types';
import Icon      from '../Icon/Icon';

import './IconContainer.scss';

const IconContainer = ({ icons }) => {
  return (
    <div className="icon-grid">
      {icons.map((icon, idx) => {
        // chunk into three column rows
        const style = {
          gridRowStart: Math.floor(idx / 3) + 1,
          gridColumnStart:  idx % 3 + 1
        }
        return <Icon {...icon} idx={idx} key={icon.icon} style={style}/>;
      })}
    </div>
  )
}

IconContainer.propTypes = {
  icons: PropTypes.array.isRequired,
}

export default IconContainer;
