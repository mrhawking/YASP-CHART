import classes from './ColumnChartSingleBlock.module.css'

const ColumnChartSingleBlock = ({ children, className, customStyles, color, height }) => {
  return (
    <div
      className={`${classes.chartSingleBlock} ${className || ''} ${classes[color] || ''}`}
      style={{...customStyles, height: height}}>
      {children}
    </div>
  )
}

export default ColumnChartSingleBlock