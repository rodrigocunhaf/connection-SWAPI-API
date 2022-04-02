import React, { useState } from "react";
import style from "./Navigation.module.css";
import menuIcon from "../../assets/icons/menu-icon.png";
import axios from "axios";
import LoadingPortal from "../Loading/Loading";


const  Navigation = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getPeoples = async () => {
        try {
            setIsLoading(true);
            const people = await axios.get ("https://swapi.dev/api/people");

            props.setVisibleItems({ 
                data:people.data.results,
                type:"PEOPLES"
           });
           setIsLoading(false);
           setIsVisible(false)
        } catch ( err ) {
            console.log(err);
        }
    };

    const getPlanets = async () => {
        try {
            setIsLoading(true)
            const planets = await axios.get ("https://swapi.dev/api/planets");

            props.setVisibleItems(
                 { 
                     data:planets.data.results,
                     type:"PLANETS"
                });
                setIsLoading(false)
                setIsVisible(false)
        } catch ( err ) {
            console.log(err);
        }
    };

    const getStarships = async () => {
        try {
            setIsLoading(true)
            const starships = await axios.get ("https://swapi.dev/api/starships");

            props.setVisibleItems({ 
                data:starships.data.results,
                type:"STARSHIPS"
           })
           setIsLoading(false)
           setIsVisible(false);
        } catch ( err ) {
            console.log(err);
        }
    };

    const openNavigation = ( ) => {
        return setIsVisible(true);
    };
    const closeNavigation = ( ) => {
        return setIsVisible(false);
    };


    return (
        <nav className={style.container}  >
            <div>
                <div className={style.box} onMouseEnter={openNavigation}>
                    <LoadingPortal isLoading={isLoading}/>
                    <button   className={style.menuButton} tabIndex={0}><img src={menuIcon} alt="menu icon"/></button>
                    <ul  onMouseLeave={closeNavigation}  className={style.buttonList} style={{display: (!isVisible && 'none') || ' '}}>
                        <li><button  onClick={getPeoples}>Peoples</button></li>
                        <li><button  onClick={getStarships}>Starships</button></li>
                        <li><button  onClick={getPlanets}>Planets</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;