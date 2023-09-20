import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Routes from './routes/Routes.jsx';



function App() {

  return (
    <>
      
      <Navbar />
      <Routes />
      <Footer />
      
    </>
  );
}

export default App