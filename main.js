import tachyonsJs from 'tachyons-js';

const tachyonsForStyled = props =>
  Object.keys(props).map(props => tachyonsJs[props]);

export default tachyonsForStyled;
