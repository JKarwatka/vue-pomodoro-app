<script setup lang="ts">
import BaseSwitchOption from './BaseSwitchOption.vue';
import {useSwitchStore} from '../stores/SwitchStore'

const store = useSwitchStore()

</script>

<template>
  <div class="container">
    <BaseSwitchOption v-for="option in store.switchOptions" v-bind:key="option.id" :label="option.label" :id="option.id" :isActive="store.activeSwitchOptionId === option.id"/>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  background-color: #161932;
  padding: 10px;
  border-radius: 31.5px;
  column-gap: 10px;
}
</style>