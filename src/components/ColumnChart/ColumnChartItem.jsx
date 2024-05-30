import classes from './ColumnChartItem.module.css';

const ColumnChartItem = ({ children }) => {
  return (
      <li>
        <div className={`${classes.columnChartWrapper}`}>
          {children}
        </div>
      </li>
  );
}

export default ColumnChartItem;