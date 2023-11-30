import Carousel from "../../Components/Carousel/Carousel.jsx";
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../Pages/Home/styleHome.css'

const Home = () => {
    return (
        <>
            <Carousel />
            
            <br />
            <Container>
                <div className='container-fluid'>
                    <div className='row'>
                        <Link href='https://previaje.gob.ar/'
                            target="_blank">
                            <img
                                className="img-fluid"
                                src="src/assets/img/Publicidad Previaje.jpg"
                                alt="publicidad pre-viaje" 
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home;