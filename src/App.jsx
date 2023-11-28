import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Routes from './Routes/Routes.jsx';
import UserContext from './Context/UserContext';
import InventoryContext from './Context/InventoryContext'



function App() {
  return (
    <>

      <UserContext>
        <InventoryContext>
          <Navbar />
          <Routes />
        </InventoryContext>
      </UserContext>
      <div>
        
        <Footer />
        </div>
    </>
  );
}

export default App