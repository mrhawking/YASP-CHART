import { useContext, useEffect } from "react";
import ColumnChart from "../components/ColumnChart/ColumnChart";
import { useParams } from "react-router-dom";
import { urlList } from "../utils/url-list";
import { ChartsContext } from "../store/charts-context";

const OsItemPage = () => {
  const { chartsData, setChartsData } = useContext(ChartsContext);
  const { osId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://rcslabs.ru/ttrp${urlList[osId]}.json`);
      const data = await response.json();
      return data;
    };

    fetchData().then(data => {
      setChartsData(data)
    });
  }, [osId])

  return (
    <main className="container">
      {chartsData && <ColumnChart />}
    </main>
  )
}

export default OsItemPage