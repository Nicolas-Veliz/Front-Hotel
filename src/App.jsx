import 'bootstrap/dist/css/bootstrap.min.css'
import UserContext from './Context/UserContext';
import InventoryContext from './Context/InventoryContext'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Routes from './Components/Pages/Routes/Routes.jsx';


function App() {
  return (
    
    <>
      <UserContext>
        <InventoryContext>
          <Navbar />
          <Footer />
          <Routes />
        </InventoryContext>
      </UserContext>
    
    </>
  );
}

export default App