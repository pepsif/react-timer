import React, {createRef} from "react";

import './clock.css'

function Clock(props) {
    const bellIcon = createRef()
    const settingsModal = createRef()

    let clockSettingsWindow = {
        count: 0,
        color: 'red',
        display: 'none',
        openSettingsWindow() {
            clockSettingsWindow.count += 1
            clockSettingsWindow.display = "block"
            console.log(clockSettingsWindow.count)
        }

    }
    const openModal = () => {
        clockSettingsWindow.openSettingsWindow()
    }

    return (
        <section className="clock-block">
            <div className="container clock-container">
                <div className="clock-table">
                    <div className="number-block">{props.state.clockHours}:{props.state.clockMinutes}</div>
                    <div className="alarm-block">
                        <img className="bell-icon" src={require("../../images/bell.jpg")} alt="bell-icon"
                             onClick={openModal} ref={bellIcon}></img>
                        <span className="alarm-day">{props.state.currentDay}</span>
                        <img className="settings-icon" src={require("../../images/settings.png")}
                             alt="settings icon"></img>
                    </div>
                    <div className="clock-settings-modal" style={clockSettingsWindow} ref={settingsModal}>
                        <h3 className="clock-settings-title">set alarm</h3>
                    </div>

                </div>
            </div>

        </section>
    )

}


export default Clock