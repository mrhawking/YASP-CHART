import classes from './Arrows.module.css';
import SingleArrow from './SingleArrow';

const Arrows = () => {
  return (
    <div style={{ height: '62px' }}>
      <div style={{ display: 'flex', gap: '18px', paddingLeft: '39px' }}>
        <SingleArrow/>
      </div>
    </div>
  )
}

export default Arrows