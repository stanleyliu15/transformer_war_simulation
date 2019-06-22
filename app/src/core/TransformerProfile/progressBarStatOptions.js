const animationOptions = {
  easing: 'easeInOut',
  duration: 1200,
  from: { color: '#d3d3d3', width: 12 },
  to: { color: '#FFD700', width: 12 },
  step: (state, shape) => {
    shape.path.setAttribute('stroke', state.color);
    shape.path.setAttribute('stroke-width', state.width);
  },
  disableTextAnimation: true
};

const styleOptions = {
  strokeWidth: 12,
  trailWidth: 12,
  autoStyleContainer: false,
  text: {
    style: {
      color: '#000',
      fontSize: '20px',
      fontWeight: 'bold',
      position: 'absolute',
      top: '50%',
      left: '50%',
      padding: 0,
      margin: 0,
      transform: {
        prefix: true,
        value: 'translate(-50%, -50%)'
      }
    }
  }
};

export { styleOptions, animationOptions };
