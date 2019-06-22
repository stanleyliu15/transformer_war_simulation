import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgBar from 'progressbar.js';

class ProgressBar extends Component {
  state = {
    Shape: null
  };

  ref = React.createRef();

  componentDidMount() {
    const { Shape, styleOptions, delay } = this.props;

    this.setState(
      {
        Shape: new Shape(this.ref.current, styleOptions)
      },
      () => {
        if (delay) {
          this.timeout = setTimeout(() => {
            this.animate();
          }, delay);
        } else {
          this.animate();
        }
      }
    );
  }

  componentWillUnmount() {
    const { Shape } = this.state;

    if (Shape) {
      Shape.destroy();
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  animate() {
    const { Shape } = this.state;
    const { value, maxValue, animationOptions, onAnimationEnd } = this.props;

    Shape.setText(value);
    Shape.animate(value / maxValue, animationOptions, onAnimationEnd);
  }

  render() {
    return <div ref={this.ref} />;
  }
}

const basePropTypes = {
  /**
   * The progress value
   */
  value: PropTypes.number.isRequired,
  /**
   * The maximum progress value
   */
  maxValue: PropTypes.number.isRequired,
  /**
   * Delay before starting the animation, in milliseconds
   */
  delay: PropTypes.number,
  /**
   * The styles for drawing the shape based on: https://progressbarjs.readthedocs.io/en/latest/api/shape/
   */
  styleOptions: PropTypes.object,
  /**
   * The animation styles for drawing the shape based on: https://progressbarjs.readthedocs.io/en/latest/api/shape/
   *
   */
  animationOptions: PropTypes.object,
  /**
   * The callback when an animation finishes
   */
  onAnimationEnd: PropTypes.func
};

const ProgressLine = ({
  delay,
  value,
  maxValue,
  styleOptions,
  animationOptions,
  onAnimationEnd
}) => (
  <ProgressBar
    Shape={ProgBar.Line}
    delay={delay}
    value={value}
    maxValue={maxValue}
    styleOptions={styleOptions}
    animationOptions={animationOptions}
    onAnimationEnd={onAnimationEnd}
  />
);

const ProgressCircle = ({
  delay,
  value,
  maxValue,
  styleOptions,
  animationOptions,
  onAnimationEnd
}) => (
  <ProgressBar
    Shape={ProgBar.Circle}
    delay={delay}
    value={value}
    maxValue={maxValue}
    styleOptions={styleOptions}
    animationOptions={animationOptions}
    onAnimationEnd={onAnimationEnd}
  />
);

const ProgressSemiCircle = ({
  delay,
  value,
  maxValue,
  styleOptions,
  animationOptions,
  onAnimationEnd
}) => (
  <ProgressBar
    Shape={ProgBar.SemiCircle}
    delay={delay}
    value={value}
    maxValue={maxValue}
    styleOptions={styleOptions}
    animationOptions={animationOptions}
    onAnimationEnd={onAnimationEnd}
  />
);

ProgressBar.propTypes = {
  ...basePropTypes,
  Shape: PropTypes.oneOf([ProgBar.Circle, ProgBar.Line, ProgBar.SemiCircle])
};
ProgressLine.propTypes = basePropTypes;
ProgressCircle.propTypes = basePropTypes;
ProgressSemiCircle.propTypes = basePropTypes;

export { ProgressCircle, ProgressLine, ProgressSemiCircle };
