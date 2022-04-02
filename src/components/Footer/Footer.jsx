import React from "react";
import Logo from "../Logo/Logo";
import style from "./Footer.module.css";

const Footer =  ( ) => {

    return (
        <div className={style.container}>
            <div className={style.box}>
                <Logo/>
            </div>
        </div>
    );
};

export default Footer;