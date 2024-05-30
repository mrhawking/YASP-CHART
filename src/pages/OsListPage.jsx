import { Link } from "react-router-dom";
import { URL_LIST } from "../utils/url-list";

const OsListPage = () => {
  const osList = Object.keys(URL_LIST);
  
  return (
    <div className="container">
      <ul className="flex-center">
        {osList.map(item => (
          <Link className="button" key={item} to={item}>
            {item.replace('-', ' ')}
          </Link>)
        )}
      </ul>
    </div>
  );
}

export default OsListPage;