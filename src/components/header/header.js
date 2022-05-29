import React from "react";
import layouticon from "../../assets/img/layout.svg"


const Header = () => {


    return(
        <div className="header">
            <div className="logo">
                
            </div>
            <div className="user">
                <img src={layouticon} className="layouticon" alt="kayit"/>
                <span>Çalışma Alanı 1</span>
                <label className="name">RK</label><span>Merhaba Recep</span>
            </div>
        </div>
    )
}

export default Header;