import { setActivePinia, createPinia } from 'pinia';
import { useTimerStore } from './index';
import { describe, beforeEach, it, expect, bench } from 'vitest';

describe('Timer Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('shoud default showTime and endAt to zeros', async () => {
    const { showTime, endAt } = useTimerStore();
    expect(showTime).toEqual('00:00');
  });
});
