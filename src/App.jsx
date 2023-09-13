import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Navbar/Navbar';



function App() {
  
  return (
    <>
      <UserContext>
        <ContextoDeInventario>
          <Navbar />
          <Rutas />
          <Footer />
        </ContextoDeInventario>
      </UserContext>
    </>
  );
}

export default App