import { useContext } from 'react';
import ColumnChartSingleBlock from './ColumnChartSingleBlock';
import { ChartsContext } from '../../../store/charts-context';
import { countHeight, formatNumber } from '../../../utils/util';
import { COLOR_LIST } from '../../../utils/color-list';
import classes from './ColumnChartCompoundBlock.module.css';

const ColumnChartCompoundBlock = ({ className, chartData }) => {
  const { max, maxHeight } = useContext(ChartsContext);

  const frontHeight = countHeight(chartData.front, max, maxHeight) || 0;
  const backHeight = countHeight(chartData.back, max, maxHeight) || 0;
  const dbHeight = countHeight(chartData.db, max, maxHeight) || 0;

  return (
    <div className={`${classes.chartCompoundBlock} ${className || ''}`}>
      <ColumnChartSingleBlock
        height={frontHeight}
        color={COLOR_LIST.FRONT}>{formatNumber(chartData.front)}</ColumnChartSingleBlock >
      <ColumnChartSingleBlock
        height={backHeight}
        color={COLOR_LIST.BACK}>{formatNumber(chartData.back)}</ColumnChartSingleBlock >
      <ColumnChartSingleBlock
        height={dbHeight}
        color={COLOR_LIST.DB}>{formatNumber(chartData.db)}</ColumnChartSingleBlock>
    </div>
  );
}

export default ColumnChartCompoundBlock;