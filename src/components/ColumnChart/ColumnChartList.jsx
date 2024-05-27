import { useContext } from 'react';
import ColumnChartItem from '../ColumnChart/ColumnChartItem';
import ColumnChartCaption from './ColumnChartCaption';
import ColumnChartCompoundBlock from './ColumnChartCompoundBlock/ColumnChartCompoundBlock';
import classes from './ColumnChartList.module.css';
import ColumnChartStandard from './ColumnChartStandard';
import { ChartsContext } from '../../store/charts-context';


const ColumnChartList = () => {
  const {chartsData} = useContext(ChartsContext);

  return (
    <ul style={{ display: 'flex', gap: '60px', maxWidth: '500px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
      {chartsData.map((item) => {
        return (
          <ColumnChartItem key={Math.random()}>
            <ColumnChartCaption>{item.name}</ColumnChartCaption>
            <ColumnChartCompoundBlock chartData={item.data}/>
          </ColumnChartItem>
        );
      })}
      <ColumnChartStandard color='blue'/>
    </ul>
  )
}

export default ColumnChartList