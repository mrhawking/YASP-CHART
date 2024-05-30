import TestsTypesItem from './TestsTypesItem';
import classes from './TestsTypesList.module.css';

const TestsTypesList = ({ list }) => {
  const testTypes = Object.keys(list);

  return (
    <ul className={classes.testsTypesList}>
      {testTypes.map(item => (
        <TestsTypesItem key={item} testType={item} />
      ))}
    </ul>
  );
}

export default TestsTypesList;