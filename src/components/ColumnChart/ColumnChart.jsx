import { useContext } from 'react';
import ColumnChartList from './ColumnChartList';
import Arrows from '../Arrows/Arrows';
import TestsTypesList from '../TestsTypesList/TestsTypesList';
import MenuButton from '../UI/MenuButton';
import { ChartsContext } from '../../store/charts-context';
import { TESTS_TYPES } from '../../utils/tests-types';
import classes from './ColumnChart.module.css';

const ColumnChart = () => {
  const { title } = useContext(ChartsContext);

  return (
    <section className={classes.columnChartSection} >
      <h2 className={`title ${classes.columnChartTitle}`}>
        Количество пройденных тестов &quot;{title}&quot;
        <MenuButton />
      </h2>
      <div className={classes.columnChartInner}>
        <div className={classes.columnChartContent} >
          <div>
            <Arrows />
            <ColumnChartList />
          </div>
        </div>
        <TestsTypesList list={TESTS_TYPES} />
      </div>
    </section>
  );
}

export default ColumnChart;