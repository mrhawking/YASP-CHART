import classes from './ColumnChartSingleBlock.module.css'

const ColumnChartSingleBlock = ({ children, className, customStyles, color, height }) => {
  return (
    <div
      className={`${classes.chartSingleBlock} ${className || ''} ${classes[color] || ''}`}
      style={{ ...customStyles, height: height + 'px' }}>
      <span
        className={`${height < 16 && 'hidden'}`}>
        {children}
      </span>
    </div>
  );
}

export default ColumnChartSingleBlock;