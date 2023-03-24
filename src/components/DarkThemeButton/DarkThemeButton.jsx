import React from "react";
import './DarkThemeButton.css'
import  themeIcon  from '../../assets/icons/Vector.png'

export const DarkThemeButton = () => {
    return(
        <input className="theme-checkbox" type="checkbox">
                   {/*<img className="theme-icon" src={themeIcon} />*/}
        </input>
    )
}