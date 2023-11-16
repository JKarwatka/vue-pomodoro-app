<script setup lang="ts">
import BaseBody1 from './BaseBody1.vue';
interface BaseSwitchOptionProps {
  id: string,
  label: string,
  isActive: boolean
}

const { label, isActive } = defineProps<BaseSwitchOptionProps>()
</script>

<template>
  <button :class="{active: isActive, inactive: !isActive }">
    <BaseBody1 :text="label" />
  </button>
</template>

<style lang="scss" scoped>
button{
  padding: 15px 25px;
  border-radius: 26px;
  border: none;

  &:hover {
    opacity: 0.20;
  }
}

.active{
  color: #1E213F;
  background-color: #F87070;
}
.inactive{
  color: #D7E0FF;
  background-color: transparent;
}
</style>