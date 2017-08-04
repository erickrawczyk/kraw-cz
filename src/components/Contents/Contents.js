import React     from 'react';
import PropTypes from 'prop-types';

import "./Contents.scss";

const Contents = ({ contents }) => {

  return (
    <div className="contents">
      <hr />
      {contents.map((content, idx) => <div key={idx}>{content}</div>)}
    </div>
  )
}


Contents.propTypes = {
  contents: PropTypes.array.isRequired,
}

export default Contents;
