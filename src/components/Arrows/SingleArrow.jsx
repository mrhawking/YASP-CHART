import Emblem from '../UI/Emblem';
import ArrowDownIcon from '../Icons/ArrowDownIcon';
import ArrowUpIcon from '../Icons/ArrowUpIcon';
import ArrowPath from './ArrowPath';
import { useResize } from '../../hooks/useResize';
import { formatNumber } from '../../utils/util';
import classes from './SingleArrow.module.css';

const SingleArrow = ({ diff, lineHeight, arrowLineHeight, emblemPosition }) => {
  const { isScreenSm } = useResize();
  const svgWidth = isScreenSm ? 85 : 135;
  const arrowWidth = 7;
  const arrowHeight = 4;
  const emblemColor = diff > 0 ? 'green' : diff < 0 ? 'red' : '';

  return (
    <>
      <div className={classes.arrowWrapper}>
        <ArrowPath
          svgWidth={svgWidth }
          lineHeight={lineHeight}
          arrowLineHeight={ arrowLineHeight}
          arrowWidth={ arrowWidth}
          arrowHeight={arrowHeight}
          color="#898290"
        />
        <Emblem className={emblemPosition} color={emblemColor}>
          {diff < 0 && <ArrowDownIcon color="#fff" />}
          {diff > 0 && <ArrowUpIcon color="#fff" />}
          {diff > 0 && `+`}
          {formatNumber(diff)}
        </Emblem>
      </div>
    </>
  );
}

export default SingleArrow;