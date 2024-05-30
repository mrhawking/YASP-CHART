import { useContext } from 'react';
import ColumnChartItem from '../ColumnChart/ColumnChartItem';
import ColumnChartCaption from './ColumnChartCaption';
import ColumnChartCompoundBlock from './ColumnChartCompoundBlock/ColumnChartCompoundBlock';
import ColumnChartStandard from './ColumnChartStandard';
import { ChartsContext } from '../../store/charts-context';
import classes from './ColumnChartList.module.css';


const ColumnChartList = () => {
  const {chartsData, norm} = useContext(ChartsContext);

  return (
    <ul className={classes.chartList}>
      {chartsData.map((item) => {
        return (
          <ColumnChartItem key={item.name}>
            <ColumnChartCaption>{item.name}</ColumnChartCaption>
            <ColumnChartCompoundBlock chartData={item.data}/>
          </ColumnChartItem>
        );
      })}
      {norm ? <ColumnChartStandard color='blue'/> : <span>Данных нет</span>}
    </ul>
  );
}

export default ColumnChartList;