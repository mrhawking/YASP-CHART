import { Link } from "react-router-dom";

const HomePage = () => {
  return (
      <div className="container">
        <div style={{textAlign: 'center'}}>
          <Link className="button" to="oslist">Перейти к списку тестов</Link>
        </div>
      </div>
  );
}

export default HomePage;