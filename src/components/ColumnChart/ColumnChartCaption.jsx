import classes from './ColumnChartCaption.module.css';

const ColumnChartCaption = ({ className, customStyles, children }) => {
  return (
    <h3 className={`text ${classes.caption} ${className || ''}`} style={customStyles || null}>{children}</h3>
  );
}

export default ColumnChartCaption;