import React from 'react';

const Header = props => ((
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
));

Header.defaultProps = {
  title: 'Indecision',
  subtitle: undefined,
};

Header.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};

export default Header;
