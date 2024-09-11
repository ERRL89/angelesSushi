import React from "react";
import '../styles/Carousel.scss';
import img1 from '../images/carousel/1.png';
import img2 from '../images/carousel/2.png';
import img3 from '../images/carousel/3.png';

const Carousel = () => {
    return (
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="Imagen Sushi Teriyaki Angeles platillo 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="Imagen Sushi Teriyaki Angeles platillo 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="Imagen Sushi Teriyaki Angeles platillo 3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
           );
}

export default Carousel;