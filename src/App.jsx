import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Routes from './routes/Routes.jsx';



function App() {

  return (
    <>
      <UserContext>
        <InventoryContext>
          <Navbar />
          <Routes />
          <Footer />
        </InventoryContext>
      </UserContext>
    </>
  );
}

export default App