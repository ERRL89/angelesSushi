import React from 'react';
import Platillo from './Platillo';
import '../styles/Menu.scss';
import '../styles/Platillo.scss';

//Imagenes de Rollos
import california from '../images/platillos/california.jpg';
import aguacateRoll from '../images/platillos/aguacateRoll.jpg';
import tampicoRoll from '../images/platillos/tampicoRoll.jpg';
import arcoirisRoll from '../images/platillos/arcoirisRoll.jpg';
import crunchyRoll from '../images/platillos/crunchyRoll.jpg';
import sakeRoll from '../images/platillos/sakeRoll.jpg';
import ebiRoll from '../images/platillos/ebiRoll.jpg';

//Imagenes de Rollos Empanizados
import cieloMarTierra from '../images/platillos/cieloMarTierra.jpg';
import mexicali from '../images/platillos/mexicali.jpg';
import nikuRoll from '../images/platillos/nikuRoll.jpg';
import yimiRoll from '../images/platillos/yimiRoll.jpg';
import tocinitoRoll from '../images/platillos/tocinitoRoll.jpg';
import manchegoRoll from '../images/platillos/manchegoRoll.jpg';
import chickenRoll from '../images/platillos/chickenRoll.jpg';
import pizzaRoll from '../images/platillos/pizzaRoll.jpg';
import manchadoRoll from '../images/platillos/manchadoRoll.jpg';

//Imagenes de Platillos
import  yakimeshiSencillo from '../images/platillos/yakimeshiSencillo.jpg';
import  yakimeshiVolcano from '../images/platillos/yakimeshiVolcano.jpg';
import  yakimeshiEspecial from '../images/platillos/yakimeshiEspecial.jpg';
import  chuletaEspecial from '../images/platillos/chuletaEspecial.jpg';
import  camaronesEmpanizados from '../images/platillos/camaronesEmpanizados.jpg';
import  teriyakiPollo from '../images/platillos/teriyakiPollo.jpg';
import  gohanTeriyaki from '../images/platillos/gohanTeriyaki.jpg';

//Imagenes de Combos
import combo1 from '../images/platillos/combo1.jpg';
import combo2 from '../images/platillos/combo2.jpg';
import combo3 from '../images/platillos/combo3.jpg';
import combo4 from '../images/platillos/combo4.jpg';
import combo5 from '../images/platillos/combo5.jpg';

//Imagenes de Charolas
import charola1 from '../images/platillos/charola1.jpg';
import charola2 from '../images/platillos/charola2.jpg';
import charola3 from '../images/platillos/charola3.jpg';
import charola4 from '../images/platillos/charola4.jpg';
import charola5 from '../images/platillos/charola5.jpg';
import charola6 from '../images/platillos/charola6.jpg';


const Menu = () => {
    const rollos = [
        {
            id: 'roll1',
            title: 'California Roll',
            items: ['Pollo', 'Res', 'Camarón', 'Surimi'],
            imageSrc: california,
            price: '$110.00',
        },
        {
            id: 'roll2',
            title: 'Aguacate Roll',
            items: ['Philadelfia', 'Camarón', 'Surimi', 'Pepino', 'Forrado de Aguacate'],
            imageSrc: aguacateRoll,
            price: '$120.00',
        },
        {
            id: 'roll3',
            title: 'Tampico Roll',
            items: ['Philadelfia', 'Aguacate', 'Camarón capeado', 'Forrado de tampico', 'Salsiado con anguila y jalapeño'],
            imageSrc: tampicoRoll,
            price: '$135.00',
        },
        {
            id: 'roll4',
            title: 'Arcoiris Roll',
            items: ['Philadelfia', 'Aguacate', 'Pepino', 'Surimi', 'Forrado de salmón, camarón y aguacate'],
            imageSrc: arcoirisRoll,
            price: '$150.00',
        },
        {
            id: 'roll5',
            title: 'Crunchy Roll',
            items: ['Philadelfia', 'Aguacate', 'Pepino', 'Surimi', 'Tapping de camarones capeados'],
            imageSrc: crunchyRoll,
            price: '$140.00',
        },
        {
            id: 'roll6',
            title: 'Sake Roll',
            items: ['Philadelfia', 'Aguacate', 'Pepino', 'Camarón', 'Forrado de salmón', 'Bañado en salsa especial'],
            imageSrc: sakeRoll,
            price: '$150.00',
        },
        {
            id: 'roll7',
            title: 'Ebi Roll',
            items: ['Philadelfia', 'Aguacate', 'Pepino', 'Surimi', 'Forrado de camarón'],
            imageSrc: ebiRoll,
            price: '$145.00',
        },
    ];

    const empanizados = [
        {
            id: 'rollBreaded1',
            title: 'Cielo, Mar y Tierra',
            items: ['Queso', 'Aguacate', 'Camarón', 'Res', 'Pollo'],
            imageSrc: cieloMarTierra,
            price: '$140.00',
        },
        {
            id: 'rollBreaded2',
            title: 'Mexicali',
            items: ['Queso', 'Aguacate', 'Camarón', 'Res', 'Tocino'],
            imageSrc: mexicali,
            price: '$145.00',
        },
        {
            id: 'rollBreaded3',
            title: 'Niku Roll',
            items: ['Queso', 'Aguacate', 'Res', 'Forrado de Aguacate', 'Salseado en chipotle y anguila'],
            imageSrc: nikuRoll,
            price: '$130.00',
        },
        {
            id: 'rollBreaded4',
            title: 'Yimi Roll',
            items: ['Queso', 'Aguacate', 'Camaron capeado', 'Surimi preparado', 'Salseado en tres salsas'],
            imageSrc: yimiRoll,
            price: '$160.00',
        },
        {
            id: 'rollBreaded5',
            title: 'Tocinito Roll',
            items: ['Manchego', 'Aguacate', 'Pollo', 'Tocino', 'Salseado en jalapeño y anguila'],
            imageSrc: tocinitoRoll,
            price: '$140.00',
        },
        {
            id: 'rollBreaded6',
            title: 'Manchego Roll',
            items: ['Queso', 'Aguacate', 'Res', 'Forrado de Manchego con cebollin y jalapeño', 'Salseado en chipotle y jalapeño'],
            imageSrc: manchegoRoll,
            price: '$150.00',
        },
        {
            id: 'rollBreaded7',
            title: 'Chicken Roll',
            items: ['Queso', 'Aguacate', 'Pollo', 'Topping de Surimi', 'Queso manchego gratinado', 'Salseado en anguila', 'Laminas de aguacate'],
            imageSrc: chickenRoll,
            price: '$155.00',
        },
        {
            id: 'rollBreaded8',
            title: 'Pizza Roll',
            items: ['Queso', 'Aguacate', 'Tocino', 'Gratinado con manchego', 'Tiras de morron'],
            imageSrc: pizzaRoll,
            price: '$140.00',
        },
        {
            id: 'rollBreaded9',
            title: 'Manchado Roll',
            items: ['Queso', 'Aguacate', 'Res', 'Tocino', 'Gratinado con manchego', 'Camaron', 'Cebollin', 'Salsa picante de la casa'],
            imageSrc: manchadoRoll,
            price: '$190.00',
        },
    ];

    const platillos = [
        {
            id: 'platillo1',
            title: 'Yakimeshi sencillo',
            items: ['Res'],
            imageSrc: yakimeshiSencillo,
            price: '$110.00',
        },
        {
            id: 'platillo2',
            title: 'Yakimeshi Volcano',
            items: ['Queso', 'Aguacate', 'Surimi', 'Carne o Pollo'],
            imageSrc: yakimeshiVolcano,
            price: '$130.00',
        },
        {
            id: 'platillo3',
            title: 'Yakimeshi Especial',
            items: ['Queso', 'Aguacate', 'Camarón', 'Carne o Tocino'],
            imageSrc: yakimeshiEspecial,
            price: '$150.00',
        },
        {
            id: 'platillo4',
            title: 'Chuleta Especial',
            items: ['Arroz', 'Ensalada'],
            imageSrc: chuletaEspecial,
            price: '$110.00',
        },
        {
            id: 'platillo5',
            title: 'Camarones',
            items: ['Camarones empanizados','Porción de arroz', 'Ensalada', 'Salsa a elegir'],
            imageSrc: camaronesEmpanizados,
            price: '$120.00',
        },
        {
            id: 'platillo6',
            title: 'Teriyaki de Pollo',
            items: ['Pollo', 'Res', 'Mixto'],
            imageSrc: teriyakiPollo,
            price: '$95.00',
        },
        {
            id: 'platillo7',
            title: 'Gohan Teriyaki',
            items: ['Pollo', 'Zanahoria', 'Brocoli'],
            imageSrc: gohanTeriyaki,
            price: '$90.00',
        },
       
    ];

    const combos = [
        {
            id: 'combo1',
            title: 'Combo 1',
            items: ['1/2 Cielo Mar y Tierra', '1/2 Yakimeshi Volcano'],
            imageSrc: combo1,
            price: '$130.00',
        },
        {
            id: 'combo2',
            title: 'Combo 2',
            items: ['1/2 Niku Roll', '1/2 Boneless'],
            imageSrc: combo2,
            price: '$140.00',
        },
        {
            id: 'combo3',
            title: 'Combo 3',
            items: ['1/2 Yakisoba de pollo', '2 Sushibolas de res'],
            imageSrc: combo3,
            price: '$140.00',
        },
        {
            id: 'combo4',
            title: 'Combo 4',
            items: ['1/2 Teriyaki de Pollo', '1/2 Yimi Roll'],
            imageSrc: combo4,
            price: '$130.00',
        },
        {
            id: 'combo5',
            title: 'Combo 5',
            items: ['1 Tocinito Roll', '1/2 Porción de ensalada', '1 Bola de arroz frito'],
            imageSrc: combo5,
            price: '$180.00',
        },
    ];

    const charolas = [
        {
            id: 'charola1',
            title: 'Charola Teriyaki',
            items: ['Pollo Piernil', 'Verduras', 'Cebolla y pimiento verde', 'Salsa teriyaki', 'Cama de arroz blanco'],
            imageSrc: charola1,
            price: '$250.00',
        },
        {
            id: 'charola2',
            title: 'Charola Angeles',
            items: ['1 Rollo Mexicali', '1 Aguacate', '1/2 Yakimeshi Volcano'],
            imageSrc: charola2,
            price: '$300.00',
        },
        {
            id: 'charola3',
            title: 'Charola Mixta',
            items: ['2 Rollos Cielo Mar y Tierra', '1/2 Teriyaki de pollo'],
            imageSrc: charola3,
            price: '$320.00',
        },
        {
            id: 'charola4',
            title: 'Charola Yakisoba',
            items: ['1 California Pollo', '1 Cielo Mar y Tierra', '1/2 Yakisoba'],
            imageSrc: charola4,
            price: '$340.00',
        },
        {
            id: 'charola5',
            title: 'Charola 4 Rollos',
            items: ['1 California Res', '1 Pollo', '1 Camarón', '1 Surimi', '2 Empanizados', '2 Naturales', 'Porción de ensalada' ],
            imageSrc: charola5,
            price: '$280.00',
        },
        {
            id: 'charola6',
            title: 'Charola Familiar',
            items: ['1/2 Teriyaki', '1 Tampico Roll', '1 Yimi Roll', 'Porción de boneless', 'Porción de ensalada'],
            imageSrc: charola6,
            price: '$400.00',
        },
    ];

    return (
        <div className="MenuContainerMain mb-5">
            {/*<div className="menuMain">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                    <label className="btn btn-outline-secondary labelCustom" htmlFor="btnradio1">Todos</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                    <label className="btn btn-outline-secondary labelCustom" htmlFor="btnradio2">Rollos</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                    <label className="btn btn-outline-secondary labelCustom" htmlFor="btnradio3">Charolas</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
                    <label className="btn btn-outline-secondary labelCustom" htmlFor="btnradio4">Combos</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" />
                    <label className="btn btn-outline-secondary labelCustom" htmlFor="btnradio5">Platillos</label>
                </div>
            </div>*/}
            <div className="categoryMain mt-4" id="rollos">
                <h3>Rollos (10 pzas.)</h3>
                <div className="accordion" id="accordionExample">
                    {rollos.map((rollo) => (
                        <Platillo
                            key={rollo.id}
                            id={rollo.id}
                            title={rollo.title}
                            items={rollo.items}
                            imageSrc={rollo.imageSrc}
                            price={rollo.price}
                        />
                    ))}
                </div>
            </div>
            <div className="categoryMain mt-4" id="rollosEmpanizados">
                <h3>Rollos Empanizados (10 pzas.)</h3>
                <div className="accordion" id="accordionExample">
                    {empanizados.map((empanizado) => (
                        <Platillo
                            key={empanizado.id}
                            id={empanizado.id}
                            title={empanizado.title}
                            items={empanizado.items}
                            imageSrc={empanizado.imageSrc}
                            price={empanizado.price}
                        />
                    ))}
                </div>
            </div>
            <div className="categoryMain mt-4" id="platillos">
                <h3>Platillos</h3>
                <div className="accordion" id="accordionExample">
                    {platillos.map((platillo) => (
                        <Platillo
                            key={platillo.id}
                            id={platillo.id}
                            title={platillo.title}
                            items={platillo.items}
                            imageSrc={platillo.imageSrc}
                            price={platillo.price}
                        />
                    ))}
                </div>
            </div>
            <div className="categoryMain mt-4" id="combos">
                <h3>Combos</h3>
                <div className="accordion" id="accordionExample">
                    {combos.map((combo) => (
                        <Platillo
                            key={combo.id}
                            id={combo.id}
                            title={combo.title}
                            items={combo.items}
                            imageSrc={combo.imageSrc}
                            price={combo.price}
                        />
                    ))}
                </div>
            </div>
            <div className="categoryMain mt-4" id="charolas">
                <h3>Charolas</h3>
                <div className="accordion" id="accordionExample">
                    {charolas.map((charola) => (
                        <Platillo
                            key={charola.id}
                            id={charola.id}
                            title={charola.title}
                            items={charola.items}
                            imageSrc={charola.imageSrc}
                            price={charola.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;
