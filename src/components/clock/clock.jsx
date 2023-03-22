import React from "react";
import "./clock.css";

function Clock() {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  const daysArr = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const now = new Date();
  const day = daysArr[now.getDay()];

  setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    setHours(hours);
    setMinutes(minutes);

    document.title = `${hours}:${minutes}`;
  }, 1000);

  return (
    <section className="clock-block">
      <div className="clock-table">
        <div className="date">Tu/20/03</div>

        <div className="number-block">
          {hours < 10 ? "0" + hours : hours}:
          {minutes < 10 ? "0" + minutes : minutes}
        </div>
        {/* <div className="alarm-block">
            <span className="clock-day">{day}</span> <img className="bell-icon" src={require("../../images/bell.jpg")} alt="bell-icon" ></img>

            <img className="settings-icon" src={require("../../images/settings.png")} alt="settings icon" ></img>
          </div> */}
      </div>
    </section>
  );
}

export default Clock;
