import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const duration = 600;

const defaultStyles = {
  top: {
    transform: `translateY(-100%)`,
    transition: `transform ${duration}ms ease-in-out`
  },
  bottom: {
    transform: `translateY(100%)`,
    transition: `transform ${duration}ms ease-in-out`
  },
  left: {
    transform: `translateX(-100%)`,
    transition: `transform ${duration}ms ease-in-out`
  },
  right: {
    transform: `translateX(100%)`,
    transition: `transform ${duration}ms ease-in-out`
  }
};

const transitionStyles = {
  top: {
    entering: { transform: `translateY(0)` },
    entered: { transform: `translateY(0)` },
    exiting: { transform: `translateY(-100%)` },
    exited: { transform: `translateY(-100%)` }
  },
  bottom: {
    entering: { transform: `translateY(0)` },
    entered: { transform: `translateY(0)` },
    exiting: { transform: `translateY(100%)` },
    exited: { transform: `translateY(100%)` }
  },
  left: {
    entering: { transform: `translateX(0)` },
    entered: { transform: `translateX(0)` },
    exiting: { transform: `translateX(-100%)` },
    exited: { transform: `translateX(-100%)` }
  },
  right: {
    entering: { transform: `translateX(0)` },
    entered: { transform: `translateX(0)` },
    exiting: { transform: `translateX(100%)` },
    exited: { transform: `translateX(100%)` }
  }
};

const Slide = ({ visible, direction, children }) => (
  <Transition in={visible} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyles[direction],
          ...transitionStyles[direction][state]
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

Slide.propTypes = {
  visible: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Slide;
