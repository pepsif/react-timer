import rerenderTree from "../index";

const state = {

 
    //  --CLOCK-STATE---
    clockTiming: "",
    clockHours: 0,
    clockMinutes: 0,
    currentDay: "",
    daysArr: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],

    clockTick: setInterval(() => {
        let now = new Date()
        let hour = now.getHours()
        let minute = now.getMinutes()

        state.currentDay = state.daysArr[now.getDay()]

        state.clockHours = hour
        state.clockMinutes = minute

        if (state.clockMinutes < 10) {
            state.clockMinutes = "0" + minute
        }
        
    }, 1000)
}
