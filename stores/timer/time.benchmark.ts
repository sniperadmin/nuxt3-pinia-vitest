import { setActivePinia, createPinia } from 'pinia';
import { useTimerStore } from './index';

import { describe, bench } from 'vitest';

describe('Benchmarking', () => {
  setActivePinia(createPinia());

  bench('starting timer', () => {
    useTimerStore().runStopwatch(10);
  });
});
