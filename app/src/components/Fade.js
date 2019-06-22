import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyles = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const Fade = ({ visible, children }) => {
  return (
    <Transition in={visible} timeout={duration}>
      {state => {
        return (
          <div
            style={{
              ...defaultStyles,
              ...transitionStyles[state]
            }}
          >
            {children}
          </div>
        );
      }}
    </Transition>
  );
};

Fade.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Fade;
