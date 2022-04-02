import React from "react";
import style from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = ( props ) => {

    return (
            <div className={style.container}>
                <div className={style.box}>
                    <Logo/>
                    <Navigation setVisibleItems={props.setVisibleItems}/>
                </div>
            </div>)
};


export default Header;