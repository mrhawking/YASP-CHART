import { createContext, useState } from "react";
import { countSumInObj } from "../utils/util";
import { MODE_LIST } from "../utils/mode-list";

const MAX_CHART_HEIGHT = 260;

export const ChartsContext = createContext({
  chartsData: [],
  title: '',
  max: 0,
  norm: 0,
  testCount: [],
  maxHeight: MAX_CHART_HEIGHT,
  setChartsData: () => { }
})

const ChartsContextProvider = ({ children }) => {
  const [chartsData, setChartsData] = useState({
    dev: { front: 0, back: 0, db: 0 },
    test: { front: 0, back: 0, db: 0 },
    prod: { front: 0, back: 0, db: 0 },
    title: '',
    norm: 0
  });

  const dev = countSumInObj(chartsData.dev);
  const test = countSumInObj(chartsData.test);
  const prod = countSumInObj(chartsData.prod);
  const max = Math.max(dev, test, prod, chartsData.norm);

  const chartsContext = {
    chartsData:
      [
        { name: MODE_LIST.DEV, data: chartsData[MODE_LIST.DEV] },
        { name: MODE_LIST.TEST, data: chartsData[MODE_LIST.TEST] },
        { name: MODE_LIST.PROD, data: chartsData[MODE_LIST.PROD] }
      ],
    title: chartsData.title,
    max,
    norm: chartsData.norm,
    testCount: {
      dev,
      test,
      prod
    },
    maxHeight: MAX_CHART_HEIGHT,
    setChartsData
  };

  return <ChartsContext.Provider value={chartsContext}>{children}</ChartsContext.Provider>
}

export default ChartsContextProvider;