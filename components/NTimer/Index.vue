<script lang="ts">
export default {
  name: 'ETimer',
};
</script>

<script lang="ts" setup>
import { useTimerStore } from '@/stores/timer';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const timerStore = useTimerStore();
const stopwatchComponentRef = ref(null);
/**
 * @method startTimer => this initiates the timer functionality
 * Calls runStopwatch with duration in seconds
 * @param {Event} event
 * @returns {void}
 **/
const startTimer = (seconds: number) => {
  // countdown will be defined later on
  timerStore.reset();
  const duration = parseInt(seconds);
  console.info('duration in parent => ', seconds);
  stopwatchComponentRef.value.runStopwatch(duration);
};
</script>

<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col>
        <NTimerPartialsTimeDisplay ref="stopwatchComponentRef" />
      </v-col>
    </v-row>
    <v-row>
      <NTimerPartialsTriggers @click="startTimer" />
    </v-row>
  </v-container>
</template>
