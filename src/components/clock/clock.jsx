import React from "react";
import "./clock.css";
import { Weather } from "./WeatherBlock/Weather";

function Clock() {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  const daysArr = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
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
    <section className="clock-block">
      <Weather />

      <div className="clock-table">
        <div className="date">
          <span className="date-digits">{`${ day < 10 ? "0"+day : day }/${month < 10 ? "0" + month : month}/${year}`}</span>
        </div>

        <div className="number-block">
          {hours < 10 ? "0" + hours : hours}:
          {minutes < 10 ? "0" + minutes : minutes}
        </div>
      </div>
    </section>
  );
}

export default Clock;
