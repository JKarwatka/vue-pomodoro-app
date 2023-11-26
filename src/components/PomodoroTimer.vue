<script setup lang="ts">
import { useTimerStore } from '@/stores/TimerStore';
import BaseH1 from './BaseH1.vue';
import PomodoroTimerButton from './PomodoroTimerButton.vue';
import CircularTimer from './RoundTimer.vue';

const store = useTimerStore()

</script>

<template>
  <div class="container">
    <div class="inner-circle">
        <CircularTimer/>
        <div class="timer-container">
          <BaseH1 :text="`${store.getTimerMinutes}:${store.getTimerSeconds}`"/>
          <PomodoroTimerButton/>
        </div>
    </div>

  </div>
</template>

<style lang="scss" scoped >
.container {
  height: 410px;
  width: 410px;
  background: linear-gradient(315deg, #2E325A 0%, #0E112A 100%);
  box-shadow: 50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A;
  border-radius: 100%;
}

.inner-circle{
  position: relative;
  width: calc(100% - 44px );
  height: calc(100% - 44px );
  border-radius: 100%;
  background: #161932;
  margin: 22px;
}

.timer-container{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

</style>