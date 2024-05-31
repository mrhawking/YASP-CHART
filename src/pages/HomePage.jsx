import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const HomePage = () => {
  return (
      <div className="container">
        <div className="align-center">
          <Link className="button" to={ROUTES.OSLIST}>Перейти к списку тестов</Link>
        </div>
      </div>
  );
}

export default HomePage;