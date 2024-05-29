import classes from './ColumnChart.module.css';
import ColumnChartList from './ColumnChartList';
import { useContext } from 'react';
import { ChartsContext } from '../../store/charts-context';
import Arrows from '../Arrows/Arrows';

const ColumnChart = () => {
  const { title } = useContext(ChartsContext);

  return (
    <section>
      <h2>
        Количество пройденных тестов &quot;{title}&quot;
        <span>...</span>
      </h2>

      <div>
        <div style={{ border: '1px solid blue', padding: '20px 24px' }}>


          <Arrows />

          {/* 
              <div style={{ position: 'relative', minHeight: '60px' }}>
                <div style={{ display: 'flex', gap: '18px', position: 'absolute', left: '39px' }}>
                  <div style={{ width: '132px', height: '92px', border: '1px solid var(--main-neutral--100)', borderBottom: 'none', borderRadius: '2px', position: 'relative' }}>
                  </div>
                  <div style={{ width: '132px', height: '92px', border: '1px solid var(--main-neutral--100)', borderBottom: 'none', borderRadius: '2px', position: 'relative' }} >
                    <span style={{ display: 'inline-block', backgroundColor: 'var(--increase--100)', color: 'var(--main-light--100)', borderRadius: '50px', padding: '4px 8px', fontSize: '14px', position: 'relative', left: '50%', transform: 'translate(-50%, -50%)', outline: '1px solid var(--main-light--100)' }}>+9</span>
                  </div>
                </div>
              </div> */}

          <ColumnChartList />
        </div>
        <div>
          <ul style={{ border: '1px dotted purple', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '47px', flexWrap: 'wrap' }}>
            <li style={{ position: 'relative' }}>Клиентская часть</li>
            <li>Серверная часть</li>
            <li>База данных</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ColumnChart