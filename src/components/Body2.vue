<script setup lang="ts">
  interface Body2Props {
  text: string
}

const props = defineProps<Body2Props>()
</script>

<template>
  <p class="body2">
    {{text}}
  </p>
</template>

<style scoped>
  .body2{
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
  }
</style>