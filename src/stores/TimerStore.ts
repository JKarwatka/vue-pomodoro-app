import { defineStore } from 'pinia'
import { TimerState, mapTimerStateToButtonLabel } from './consts'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    timeRemainingMs: 600000,
    timerLengthMs: 600000,
    timerState: TimerState.Paused,
    updateIntervalMs: 100
  }),
  getters: {
    getTimerMinutes: (state) => (Math.floor(state.timeRemainingMs / 60000)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    getTimerSeconds: (state) => (Math.floor((state.timeRemainingMs % 60000 )/ 1000)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    getButtonLabel: (state) => mapTimerStateToButtonLabel(state.timerState),
    getAnimationState: (state) => state.timerState === TimerState.Running ? 'running' : 'paused'
  },
  actions: {
    onButtonClick() {
      console.log('click')
      switch (this.timerState) {
        case TimerState.Paused:{
          this.timerState = TimerState.Running
          this.countDown(this.timeRemainingMs)
          break;
        }
        case TimerState.Running: {
          this.timerState = TimerState.Paused
          break;
        }
        case TimerState.Ended: {
          this.timerState = TimerState.Paused
          this.timeRemainingMs = this.timerLengthMs
        }
      }
    },
    countDown(timeRemaining: number) { 
      console.log(timeRemaining)
      setTimeout( () => {
        if(timeRemaining <= 0){
          this.timerState = TimerState.Ended
        }
        else{
          if( this.timerState === TimerState.Running){
            const remainingTime = timeRemaining - this.updateIntervalMs
            this.timeRemainingMs = remainingTime
            this.countDown(remainingTime)
          }
        }
      }, this.updateIntervalMs)
    },
    restart() {
      console.log('click')
      this.countDown(this.timeRemainingMs)
    },
    reset() {
      console.log('click')
      this.timeRemainingMs = this.timerLengthMs
      this.timerState = TimerState.Paused
    },
    pause() {
      console.log('click')
      this.timerState = TimerState.Paused
    }
  }
})
