import React from 'react';
import PropTypes from 'prop-types';

const ContentLayout = ({ children }) => <div>{children}</div>;

ContentLayout.propTypes = {
  children: PropTypes.node
};

export default ContentLayout;
