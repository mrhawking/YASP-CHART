import { URL_LIST } from "./utils/url-list";

export const fetchOsData = async (id) => {
  const response = await fetch(`https://rcslabs.ru/ttrp${URL_LIST[id]}.json`);

  if (!response.ok) {
    throw new Error('Ошибка загрузки')
  }

  const data = await response.json();
  return data;
};