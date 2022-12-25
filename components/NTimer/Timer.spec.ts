import { VueWrapper } from '@vue/test-utils';
import { describe, beforeEach, afterEach, it, expect } from 'vitest';
import {
  bootstrapVueContext,
  compositeConfiguration,
  addVuetify,
  addI18n,
  customWrapper,
  mountWrapper,
  addPinia,
} from '../../tests/utils';
import { debug } from 'vitest-preview';
import NTimer from './Index.vue';

let wrapper: VueWrapper<any>;
let vueContext: any;

describe('NTimer', () => {
  vueContext = bootstrapVueContext(
    compositeConfiguration(addVuetify, addI18n, addPinia)
  );
  beforeEach(() => {
    vueContext.stubs = ['NTimerPartialsTimeDisplay', 'NTimerPartialsTriggers'];
    vueContext.attachTo = '#app';
    wrapper = customWrapper(NTimer, vueContext);
  });

  afterEach(() => {
    vueContext.teardownVueContext();
  });

  it('should test vue component', () => {
    expect(wrapper.vm).toBeTruthy();
    debug();
  });
});
