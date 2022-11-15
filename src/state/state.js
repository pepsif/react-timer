import rerenderTree from "../index";

const state = {

  //  --STOPWATCH STATE--
  starter: "stop",
  hours: "00",
  minutes: "00",
  seconds: "00",
  t: "",

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
    this.hours = "00"
    this.minutes = "00"
    this.seconds = "00"
    rerenderTree()
  },
  tick() {
    this.seconds++

    if (this.seconds < 10) {
      this.seconds = "0" + this.seconds
    }
    if (this.seconds === 60) {
      this.minutes++
      this.seconds = "0" + 0
      if (this.minutes < 10) {
        this.minutes = "0" + this.minutes
      }
    }
  },
  //  --CLOCK-STATE---
  clockTiming: "",
  clockHours: 0,
  clockMinutes: 0,
  currentDay: "",
  daysArr: ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],
 
  clockTick: setInterval(() => {
    let now = new Date()
   let hour = now.getHours()
   let minute = now.getMinutes()
    
   state.currentDay = state.daysArr[now.getDay()]

   state.clockHours = hour
   state.clockMinutes = minute

   if(state.clockMinutes < 10) { state.clockMinutes = "0"+ minute}
    
    //  console.log(minute)
    rerenderTree()
  },1000),
}
 console.log( state.clockHours, state.clockMinutes ) 

// console.log(state.t)
// state.start() 
export default state