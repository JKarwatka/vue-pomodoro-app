export const switchOptionsIds = {
  pomodoro: "pomodoro",
  shortBreak: "short-break",
  longBreak: "long-break"
} 

export const switchOptions = [
  {
    id: switchOptionsIds.pomodoro,
    label: "pomodoro"
  },
  {
    id: switchOptionsIds.shortBreak,
    label: "short break"
  },
  {
    id: switchOptionsIds.longBreak,
    label: "long break"
  },
]

export enum TimerState {
  Running,
  Paused,
  Ended
}


export const mapTimerStateToButtonLabel = (timerState: TimerState): string => {
  switch (timerState) {
    case TimerState.Running: 
      return 'Pause'
    case TimerState.Paused:
      return 'Start'
    case TimerState.Ended:
      return 'Restart'
  }
}
export interface Time {
  minutes: number,
  seconds: number
}
