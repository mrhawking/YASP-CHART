import ColumnChartSingleBlock from './ColumnChartSingleBlock';
import classes from './ColumnChartCompoundBlock.module.css';
import { COLOR_LIST } from '../../../utils/color-list';
import { countHeight } from '../../../utils/util';
import { useContext } from 'react';
import { ChartsContext } from '../../../store/charts-context';

const ColumnChartCompoundBlock = ({ className, chartData }) => {
  const { max, maxHeight } = useContext(ChartsContext);

  return (
    <div className={`${classes.chartCompoundBlock} ${className || ''}`}>
      <ColumnChartSingleBlock
        height={`${countHeight(chartData.front, max, maxHeight)}px`}
        color={COLOR_LIST.FRONT}>{chartData.front}</ColumnChartSingleBlock >
      <ColumnChartSingleBlock
        height={`${countHeight(chartData.back, max, maxHeight)}px`}
        color={COLOR_LIST.BACK}>{chartData.back}</ColumnChartSingleBlock >
      <ColumnChartSingleBlock
        height={`${countHeight(chartData.db, max, maxHeight)}px`}
        color={COLOR_LIST.DB}>{chartData.db}</ColumnChartSingleBlock>
    </div>
  )
}

export default ColumnChartCompoundBlock;