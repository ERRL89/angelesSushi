import React from "react";
import '../styles/Title.scss';
import perfil from '../images/perfil.jpg';

const Title = () => {
    return (
        <div className="titleContainerMain">
            <div className="titleContainer">
                <div className="imgContainer">
                    <img src={perfil} alt="Sushi Teriyaki Angeles" />
                </div>
                <div className="textContainer">
                    <h3>Sushi Teriyaki Angeles</h3>
                </div>
            </div>
        </div>
    );
}

export default Title;
