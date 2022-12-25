<script lang="ts">
export default {
  name: 'NTriggers',
};
</script>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();

interface TriggerBtn {
  datasetTime: string;
}

const triggerBtns: Array<TriggerBtn> = [
  { datasetTime: 300 },
  { datasetTime: 900 },
  { datasetTime: 1200 },
  { datasetTime: 3600 },
];
</script>

<template>
  <v-col
    v-for="btn in triggerBtns"
    :key="btn.datasetTime"
    :cols="!!mobile ? 12 : 6"
  >
    <NBtn
      :dataset-time="btn.datasetTime"
      :label="`${btn.datasetTime / 60} minutes`"
      x-large
      block
      class="pa-7"
      @click.native="$emit('click', btn.datasetTime)"
    />
  </v-col>
</template>
