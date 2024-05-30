import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../components/UI/LoadingIndicator';
import ColumnChart from '../components/ColumnChart/ColumnChart';
import { ChartsContext } from '../store/charts-context';
import { fetchOsData } from '../http';

const OsItemPage = () => {
  const { chartsData, setChartsData } = useContext(ChartsContext);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { osId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError('')
      try {
        const data = await fetchOsData(osId);
        setChartsData(data)
        setIsLoading(false)
      } catch (error) {
        setError('Что-то пошло не так')
        setIsLoading(false);
      }
    }
    fetchData();

  }, [osId])

  return (
    <>
      {isLoading && (
        <div className="flex-center"><LoadingIndicator /></div>
      )}
      {!isLoading && error && <h2 className="title error">{error}</h2>}
      {!isLoading && !error && chartsData && (
        <div className="container">
          <div className="flex-center">
            {chartsData && <ColumnChart />}
          </div>
        </div>
      )}
    </>
  );
}

export default OsItemPage;