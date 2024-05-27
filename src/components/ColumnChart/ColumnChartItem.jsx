import classes from './ColumnChartItem.module.css';

const ColumnChartItem = ({ children }) => {

  return (
      <li>
        <div className={`${classes.columnChartWrapper}`} style={{ position: 'relative', paddingBottom: '27px', backgroundColor: 'var(--main-light--100)', paddingTop: '10px' }}>
          {children}
        </div>
      </li>
  )
}

export default ColumnChartItem;