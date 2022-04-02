import React from "react";
import style from "./Main.module.css"
import cardIcon from "../../assets/icons/helmet.png";
import planetIcon from "../../assets/icons/planet.png";
import starshipIcon from "../../assets/icons/starships.png";

const Main = ( props) => {

    return (
        <div className={style.container}>
            <div  className={style.box}>
                <ul className={ props.items.data.length === 0  && style.opacity}>
                    {
                        props.items.data.map( mock => {
                            return (
                                <li className={style.boxItem}>                              
                                    <div className={style.boxImage}>
                                    { props.items.type === "PEOPLES" && <img src={cardIcon} className={style.cardIcon} alt="people icon"></img> }
                                    { props.items.type === "PLANETS" && <img src={planetIcon} className={style.cardIcon} alt="planet icon"></img> }
                                    { props.items.type === "STARSHIPS" && <img src={starshipIcon} className={style.cardIcon} alt="starship icon"></img> }
                                    </div>
                                    <div className={style.name}>
                                        {mock.name.split(' ')[0]+" "}
                                        { mock.name.split(' ')[1]}
                                    </div>
                                    { props.items.type === "PEOPLES" && <div className={style.name}>
                                        Gender: {mock.gender}
                                    </div>}
                                    { props.items.type === "PLANETS" && <div className={style.name}>
                                        Diameter: {mock.diameter}
                                    </div>}
                                    { props.items.type === "STARSHIPS" && <div className={style.name}>
                                        Crew: {mock.crew}
                                    </div>}
                                </li>)
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Main;