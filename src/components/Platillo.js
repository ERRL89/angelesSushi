import React from "react";
import '../styles/Platillo.scss';

const Platillo = ({ id, title, items, imageSrc, price }) => {
    return (
        <div className="productMain">
            <div className="imgProductContainer">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="infoProductContainer">
                <div className="accordion" id={`accordion-${id}`}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${id}`}
                                aria-controls={`collapse-${id}`}
                            >
                                <span className="titleProduct">{title}</span>
                            </button>
                        </h2>
                        <div
                            id={`collapse-${id}`}
                            className="accordion-collapse collapse"
                            data-bs-parent={`#accordion-${id}`}
                        >
                            <div className="accordion-body">
                                <p className="include">Incluye:</p>
                                <ul className="includeList">
                                    {items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="infoProductText">
                    <span className="price">{price}</span>
                </div>
            </div>
        </div>
    );
}

export default Platillo;
