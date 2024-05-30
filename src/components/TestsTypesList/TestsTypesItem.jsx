import ColoredSquare from '../UI/ColoredSquare'
import { COLOR_LIST } from '../../utils/color-list'
import { TESTS_TYPES } from '../../utils/tests-types'
import classes from './TestsTypesItem.module.css';

const TestsTypesItem = ({ testType }) => {
  return (
    <li className={classes.typeItem}>
      <ColoredSquare color={COLOR_LIST[testType]} />
      {TESTS_TYPES[testType]}
    </li>
  );
}

export default TestsTypesItem;