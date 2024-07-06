import React from "react";
import "./clock.css";
import {Weather} from "./WeatherBlock/Weather";

import {motion} from "framer-motion";
import {useSelector} from "react-redux";


function Clock({ lightStyle, darkStyle }) {
    const lightOnOffValue = useSelector((state) => state.darkTheme.darkThemeOnOff);

    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);

    const daysArr = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота"];
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();


    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        setHours(hours);
        setMinutes(minutes);

        document.title = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    }, 1000);

    return (
        <motion.section className="clock-block"
                        style={ lightOnOffValue ? darkStyle.clockBlock : lightStyle.clockBlock }
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 10}}
        >
            <Weather day={daysArr[now.getDay()]}/>

            <div className="clock-table">
                <div className="date">
                    <span
                        className="date-digits">{`${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`}</span>
                </div>

                <div className="number-block">
                    {hours < 10 ? "0" + hours : hours}:
                    {minutes < 10 ? "0" + minutes : minutes}
                </div>
            </div>
        </motion.section>
    );
}

export default Clock;
