const animationOptions = {
  easing: 'easeInOut',
  duration: 1200,
  from: { color: '#d3d3d3', width: 1 },
  to: { color: '#000', width: 6 },
  step: (state, shape) => {
    shape.path.setAttribute('stroke', state.color);
    shape.path.setAttribute('stroke-width', state.width);
    shape.setText(Math.round(shape.value() * 100));
  }
};

const styleOptions = {
  strokeWidth: 6,
  trailWidth: 6,
  text: {
    style: {
      color: '#000',
      fontSize: '40px',
      fontWeight: 'bold',
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: 0,
      padding: 0,
      transform: {
        prefix: true,
        value: 'translate(-50%, -50%)'
      }
    }
  }
};

export { animationOptions, styleOptions };
