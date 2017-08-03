import React     from 'react';
import PropTypes from 'prop-types';

import "./Contents.scss";

const Contents = ({ contents }) => {

  return (
    <div className="contents">
      <hr />
      {
        // data is static so we can interpolate html strings safely
        contents.map((content, idx) => {
          return <p key={idx} dangerouslySetInnerHTML={{__html: content}}></p>
        })
      }
    </div>
  )
}


Contents.propTypes = {
  contents: PropTypes.array.isRequired,
}

export default Contents;
