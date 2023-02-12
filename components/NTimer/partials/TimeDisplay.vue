<script lang="ts">
export default {
  name: 'TimeDisplay',
};
</script>

<script lang="ts" setup>
import { useTimerStore } from '@/stores/timer';
import { storeToRefs } from 'pinia';

const timerStore = useTimerStore();
const runStopwatch = async (duration: number) => {
  timerStore.reset();
  timerStore.runStopwatch(duration);
};

const { showTime, endAt } = storeToRefs(timerStore);
// Exposing this to be callable on parent component
defineExpose({ runStopwatch });
</script>

<template>
  <v-card flat class="text-center">
    <v-card-title class="text-h3 py-8">
      {{ showTime }}
    </v-card-title>
  </v-card>
</template>
