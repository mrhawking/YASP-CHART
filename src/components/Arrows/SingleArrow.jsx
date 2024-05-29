import { useContext, useEffect, useState } from 'react';
import Emblem from '../UI/Emblem';
import classes from './SingleArrow.module.css';
import { ChartsContext } from '../../store/charts-context';
import { useResize } from '../../hooks/useResize';

const SingleArrow = () => {
  const { testCount, max, maxHeight } = useContext(ChartsContext);
  const { isScreenSm } = useResize()

  const svgWidth = isScreenSm ? 80 : 135;
  const arrowWidth = 7;
  const arrowHeight = 4;



  const leftLineHeight = (Math.round((max - testCount.dev) / max * maxHeight) || 0) + 60;
  const middleLineHeight = (Math.round((max - testCount.test) / max * maxHeight) || 0) + 60;
  const rightLineHeight = (Math.round((max - testCount.prod) / max * maxHeight) || 0) + 60;

  // console.log(Math.max(leftLineHeight,middleLineHeight))

  return (
    <>
      <div style={{ position: 'relative' }}>
        <svg id="arrowFirst" width={svgWidth} height={Math.max(leftLineHeight, middleLineHeight)} viewBox={`0 0 ${svgWidth} ${Math.max(leftLineHeight, middleLineHeight)}`} fill="none">
          <line x1="0.5" y1={leftLineHeight} x2="0.5" y2="0.5" stroke="#898290" strokeLinecap="round" />
          <line x1="0.5" y1="0.5" x2={svgWidth - arrowWidth / 2} y2="0.5" stroke="#898290" strokeLinecap="round" />
          <line x1={svgWidth - arrowWidth / 2} y1="0.5" x2={svgWidth - arrowWidth / 2} y2={middleLineHeight} stroke="#898290" strokeLinecap="round" />
          <path style={{ transform: `translate( ${svgWidth - arrowWidth}px ,${middleLineHeight - 4}px)`, fill: 'purple' }} d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z" />

        </svg>
        <Emblem color='red'>-26</Emblem>
      </div>
      <div style={{ position: 'relative' }}>
        <svg width={svgWidth} height={Math.max(rightLineHeight, middleLineHeight)} viewBox={`0 0 ${svgWidth} ${Math.max(rightLineHeight, middleLineHeight)}`} fill="none">
          <line x1="0.5" y1="0.5" x2="0.5" y2={middleLineHeight} stroke="#898290" strokeLinecap="round" />
          <line x1="0.5" y1="0.5" x2={svgWidth - arrowWidth / 2} y2="0.5" stroke="#898290" strokeLinecap="round" />
          <line x1={svgWidth - arrowWidth / 2} y1="0.5" x2={svgWidth - arrowWidth / 2} y2={rightLineHeight} stroke="#898290" strokeLinecap="round" />
          <path style={{ transform: `translate( ${svgWidth - arrowWidth}px ,${rightLineHeight - 4}px)`, fill: 'purple' }} d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z" />
        </svg>
        <Emblem color='green'>+9</Emblem>
      </div>
    </>
  )
}

export default SingleArrow