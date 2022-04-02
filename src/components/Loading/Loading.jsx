import React from "react";
import ReactDOM from "react-dom";
import  style from "./Loading.module.css";
import loadingImage from "../../assets/icons/menu-icon.png"

const Loading = ( props) => {
    
    return ReactDOM.createPortal(
        <div className={ ( props.isLoading && style.container ) || style.displayNone}>
            <div className={style.box}>
                <img src={loadingImage} alt="loading"/>
                <p>Loading...</p>
            </div>
        </div>
    ,document.getElementById('info-modal'))
};

export default Loading;
