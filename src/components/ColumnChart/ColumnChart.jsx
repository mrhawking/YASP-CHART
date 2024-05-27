import classes from './ColumnChart.module.css';
import ColumnChartList from './ColumnChartList';
import Emblem from '../UI/Emblem';
import { useContext } from 'react';
import { ChartsContext } from '../../store/charts-context';

const ColumnChart = () => {
const {title} = useContext(ChartsContext);

  return (
    <section>
      <h2>
        Количество пройденных тестов &quot;{title}&quot;
        <span>...</span>
      </h2>
      <div>
        <div style={{ border: '1px solid blue', padding: '20px 24px' }}>

          <div style={{ height: '62px' }}>
            <div style={{ display: 'flex', gap: '18px', paddingLeft: '39px' }}>
              <div style={{ position: 'relative' }}>
                <svg width="135" height="93" viewBox="0 0 135 93" fill="none">
                  <line x1="0.5" y1={61.5} x2="0.500003" y2="0.5" stroke="#898290" strokeLinecap="round" />
                  <line x1="0.5" y1="0.5" x2="45.5" y2="0.5" stroke="#898290" strokeLinecap="round" />
                  <line x1="96.5" y1="0.5" x2="131.5" y2="0.500003" stroke="#898290" strokeLinecap="round" />
                  <line x1="131.5" y1="0.5" x2="131.5" y2={91.5} stroke="#898290" strokeLinecap="round" />
                  {/* <path d="M131.025 91.3672H131.975L134.189 89.1401C134.374 88.9533 134.675 88.9533 134.861 89.1401C135.046 89.3268 135.046 89.6296 134.861 89.8164L131.836 92.8599C131.65 93.0467 131.35 93.0467 131.164 92.8599L128.139 89.8164C127.954 89.6296 127.954 89.3268 128.139 89.1401C128.325 88.9533 128.626 88.9533 128.811 89.1401L131.025 91.3672Z" fill="#898290" /> */}
                </svg>
                <Emblem color='red'>-26</Emblem>
              </div>
              <div style={{ position: 'relative' }}>
                <svg width="135" height="93" viewBox="0 0 135 93" fill="none">
                  <line x1="0.5" y1="0.5" x2="34.5" y2="0.500003" stroke="#898290" strokeLinecap="round" />
                  <line x1="0.5" y1="0.5" x2="0.500004" y2="92.5" stroke="#898290" strokeLinecap="round" />
                  <line x1="85.5" y1="0.5" x2="130.5" y2="0.500004" stroke="#898290" strokeLinecap="round" />
                  <line x1="130.5" y1="0.500004" x2="130.5" y2="80" stroke="#898290" strokeLinecap="round" />
                  {/* <path d="M130.5 0.5V81.5" stroke="#898290" strokeLinecap="round" /> */}
                  {/* <path d="M130.025 80.3672H130.975L133.189 78.1401C133.374 77.9533 133.675 77.9533 133.861 78.1401C134.046 78.3268 134.046 78.6296 133.861 78.8164L130.836 81.8599C130.65 82.0467 130.35 82.0467 130.164 81.8599L127.139 78.8164C126.954 78.6296 126.954 78.3268 127.139 78.1401C127.325 77.9533 127.626 77.9533 127.811 78.1401L130.025 80.3672Z" fill="#898290" /> */}
                </svg>
                <Emblem color='green'>+9</Emblem>
              </div>
            </div>
          </div>

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