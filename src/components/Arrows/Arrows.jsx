import { useContext } from 'react';
import SingleArrow from './SingleArrow';
import { ChartsContext } from '../../store/charts-context';
import classes from './Arrows.module.css';

const Arrows = () => {
  const { testCount, max, maxHeight } = useContext(ChartsContext);

  const leftLineHeight = (Math.round((max - testCount.dev) / max * maxHeight) || 0) + 60;
  const middleLineHeight = (Math.round((max - testCount.test) / max * maxHeight) || 0) + 60;
  const rightLineHeight = (Math.round((max - testCount.prod) / max * maxHeight) || 0) + 60;

  const devToTestDiff = testCount.test - testCount.dev;
  const testToProdDiff = testCount.prod - testCount.test;

  return (
    <div className={classes.arrowsWrapper}>
      <div className={classes.arrowsContainer}>
        <SingleArrow
          emblemPosition={`${classes.emblemPosition} ${classes.emblemRight}`}
          diff={devToTestDiff}
          lineHeight={leftLineHeight}
          arrowLineHeight={middleLineHeight} />
        <SingleArrow
          emblemPosition={`${classes.emblemPosition} ${classes.emblemLeft}`}
          diff={testToProdDiff}
          lineHeight={middleLineHeight}
          arrowLineHeight={rightLineHeight} />
      </div>
    </div>
  );
}

export default Arrows;