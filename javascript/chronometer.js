class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime, this.intervalId)
      this.currentTime = this.currentTime + 1
      if(callback) callback()
      },
      1 * 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60) 
    return minutes
  }

  getSeconds() {
    // if(this.currentTime % 60 !== 0) seconds += this.currentTime&60
    let seconds = this.currentTime - this.getMinutes() * 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    let numToStr = value.toString()
    if (numToStr.length < 2) numToStr = '0' + numToStr
    
    return numToStr
    } 
  

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    let time = minutes + ':' + seconds

    return time
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
