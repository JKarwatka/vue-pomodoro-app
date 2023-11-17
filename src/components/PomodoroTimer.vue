<script setup lang="ts">
import BaseH1 from './BaseH1.vue';
import PomodoroTimerButton from './PomodoroTimerButton.vue';
import CircularTimer from './RoundTimer.vue';
</script>

<template>
  <div class="container">
    <div class="inner-circle">
        <BaseH1 text="00:00"/>
        <PomodoroTimerButton text="pause"/>
        <CircularTimer/>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 44px );
  height: calc(100% - 44px );
  border-radius: 100%;
  background: #161932;
  margin: 22px;
}

</style>
