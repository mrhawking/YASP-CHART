const ArrowPath = ({ svgWidth, lineHeight, arrowLineHeight, arrowWidth, arrowHeight, color }) => {
  return (
    <svg width={svgWidth} height={Math.max(lineHeight, arrowLineHeight)} viewBox={`0 0 ${svgWidth} ${Math.max(lineHeight, arrowLineHeight)}`} fill="none">
      <line x1="1" y1={lineHeight} x2="1" y2="1" stroke={color} strokeLinecap="round" />
      <line x1="1" y1="1" x2={svgWidth - arrowWidth / 2} y2="1" stroke={color} strokeLinecap="round" />
      <line x1={svgWidth - arrowWidth / 2} y1="1" x2={svgWidth - arrowWidth / 2} y2={arrowLineHeight} stroke={color} strokeLinecap="round" />
      <path style={{ transform: `translate( ${svgWidth - arrowWidth}px ,${arrowLineHeight - arrowHeight}px)`, fill: `${color}` }} d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z" />
    </svg>
  );
}

export default ArrowPath;