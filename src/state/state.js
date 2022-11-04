import rerenderTree from "../index";

const state = {
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
   if ( this.seconds === 60 ) {
    this.minutes++
    this.seconds = 0
     if ( this.minutes < 10) {
     this.minutes = "0" + this.minutes

    } 
   }


  }

}
// clearInterval(state.t)
// console.log(state.t)
// state.start() 
export default state