import { defineStore } from 'pinia'
import { switchOptionsIds, switchOptions } from './consts'

export const useSwitchStore = defineStore('switchStore', {
  state: () => {
    return {
      activeSwitchOptionId: switchOptionsIds.pomodoro,
      switchOptions: switchOptions
    }
  },
})