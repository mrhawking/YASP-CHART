import classes from './ColoredSquare.module.css';

const ColoredSquare = ({ color, customStyles, className }) => {
  return (
    <div
      className={`${classes.square} ${className || ''} ${classes[color] || ''}`}
      style={customStyles}>
    </div>
  );
}

export default ColoredSquare;