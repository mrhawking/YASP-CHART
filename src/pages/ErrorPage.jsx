import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="align-center error title">
        <p>Упс! Кажется, вы потерялись...Очень жаль &#9785;</p>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;