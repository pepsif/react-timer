import timerEndBeep from "../beep/Beep-09.ogg"
import rerenderTree from "../index";
const timerEnd = new Audio(timerEndBeep);





const timerState = {
    timerStarter: false,
    timerMinutes: 0,
    timerSeconds: 0,
    timerInterval: "",
    timerDisplay: "00:00",

    timerStart() {
        if (this.timerStarter === true) return;
        this.timerStarter = true //first init starter
        this.timerMinutes -= 1   // first init minutes
        this.timerSeconds = 60
        this.timerInterval = setInterval(() => {
            this.timerSeconds -= 1

            if (this.timerSeconds === 0 && this.timerMinutes === 0) {
                clearInterval(this.timerInterval)
                this.timerStarter = false
                this.timerSeconds = "00"
                timerEnd.play()
            }

            if (this.timerSeconds === 0) {
                this.timerSeconds = 59
                this.timerMinutes -= 1
            }
            if (this.timerSeconds < 10) {
                this.timerSeconds = "0"+this.timerSeconds

            }
            if(this.timerStarter === false ) {
                this.timerSeconds = "00"
            }
            this.timerDisplay = `${this.timerMinutes}:${this.timerSeconds}`
            rerenderTree()
        }, 1000)
    },

    timerIncrease() {
        this.timerMinutes += 1
        this.timerDisplay = `${this.timerMinutes}: 0${this.timerSeconds}`
        if (this.timerMinutes < 10) {
            this.timerDisplay = "0" + `${this.timerMinutes}: 0${this.timerSeconds}`
        }
        // rerenderTree()
    },
    timerDecrease() {
        if (this.timerMinutes === 0) return
        this.timerMinutes -= 1
        this.timerDisplay = `${this.timerMinutes}: 0${this.timerSeconds}`
        if (this.timerMinutes < 10) {
            this.timerDisplay = "0" + `${this.timerMinutes}: 0${this.timerSeconds}`
        }
        // rerenderTree()
    }
}

export default timerState