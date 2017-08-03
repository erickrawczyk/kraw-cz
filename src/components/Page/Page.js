import React       from 'react';
import PropTypes   from 'prop-types';
import Contents    from '../Contents/Contents';
import Heading     from '../Heading/Heading';
import Title       from '../Title/Title';

import "./Page.scss";

const Page = ({ name, title, backgroundImage, backgroundPosition, subtitle, contents, iconRows, isFirst, isLast}) => {

  const style = {
    backgroundImage: `url('img/${backgroundImage}.jpg')`,
    backgroundPosition: backgroundPosition || 'center center',
    borderBottom: isLast ? '' : '2px solid white'
  }

  const arrowClassName = `next-btn fa fa-3x fa-angle-double-${isLast ? 'up' : 'down'}`;

  return (
    <section id={name.toLowerCase()} className="page" style={style}>

      <div className={isFirst ? 'grid darken' : 'grid gradient-overlay'}>

        {isFirst ? <Title title={title} subtitle={subtitle}/> : <Heading title={title}/>}

        { contents && contents.length ? <Contents contents={contents} /> : null }

        <i aria-hidden="true" id={name.toLowerCase() + '-next-btn'} className={arrowClassName}></i>

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
