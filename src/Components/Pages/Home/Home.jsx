import Carousel from "../../Carousel/Carousel.jsx"


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
                                className="img-fluid d-block w-100"
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