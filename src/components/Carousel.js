import React from "react";
import '../styles/Carousel.scss';
import img1 from '../images/carousel/1.png';
import img2 from '../images/carousel/2.png';
import img3 from '../images/carousel/3.png';

const Carousel = () => {

    return (
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="Imagen 1"/>
                    </div>
                    <div class="carousel-item">
                    <img src={img2} className="d-block w-100" alt="Imagen 1"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="Imagen 1"/>
                    </div>
                </div>
                <div className="iconsContainer">
                    <a href="https://www.facebook.com/sushiTeriyakiAng/">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://www.facebook.com/sushiTeriyakiAng/">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
           );
}

export default Carousel;