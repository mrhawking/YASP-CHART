import { useContext } from 'react';
import classes from './ColumnChartStandard.module.css';
import { ChartsContext } from '../../store/charts-context';
import { countHeight } from '../../utils/util';

const ColumnChartStandard = ({ color }) => {
  const { norm, max, maxHeight } = useContext(ChartsContext);

  return (
    <li>
      <div className={classes.chartStandardInner}>
        <h3 className={`text ${classes.chartStandardTitle}`} >Норматив</h3>
        <div className={`${classes.chartStandardBlock} ${classes[color] || ''}`} style={{ height: `${countHeight(norm, max, maxHeight)}px` }}>
          <span className={classes.chartStandardEmblem}>{norm}</span>
        </div>
      </div>
    </li>
  )
}

export default ColumnChartStandard