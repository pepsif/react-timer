import rerenderTree from "../index";

const state = {

    //  --STOPWATCH STATE--
    starter: "stop",
    seconds: 0,
    t: "",
    stopwatchDisplay: "00:00",
    stopWAtchBeepInterval: 1,
    startTimer() {
        if (this.starter === "play") {
            return
        }
        this.starter = "play"

        this.t = setInterval(() => {

            this.tick()
            rerenderTree()
        }, 1000)
    },
    stopTimer() {
        clearInterval(this.t)
        this.starter = "stop"
    },
    resetTimer() {
        this.stopwatchDisplay = "00:00"
        this.seconds = 0
        rerenderTree()
    },
    tick() {
        this.seconds += 1
        let display = ""

        const minutes = Math.floor(this.seconds / 60)
        const seconds = this.seconds % 60
        if (minutes < 10) {
            display += "0"
        }
        display += `${minutes}:`
        if (seconds < 10) {
            display += "0"
        }
        display += `${seconds}`
        this.stopwatchDisplay = display
        if (minutes) {
            console.log("++")
        }
    },
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
        rerenderTree()
    }, 1000)
}
export default state