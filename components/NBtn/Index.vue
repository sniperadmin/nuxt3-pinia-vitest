<script lang="ts">
export default {
  name: 'NBtn',
};
</script>

<script lang="ts" setup>
import { useLanguageStore } from '~/stores/language';
const props = defineProps({
  dataTest: {
    type: String,
    default: 'btn',
  },
  // adds color
  color: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: undefined,
  },
  depressed: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  google: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  fab: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  xLarge: {
    type: Boolean,
    default: false,
  },
  xSmall: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },
  nuxt: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: null,
  },
  removePadding: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
    default: null,
  },
  href: {
    type: [String, Object],
    default: undefined,
  },
  width: {
    type: [String, Number],
    default: null,
  },
  height: {
    type: [String, Number],
    default: null,
  },
  title: {
    type: String,
    default: undefined,
  },
});

const { getDir } = useLanguageStore();
</script>

<template>
  <v-btn
    :data-test="dataTest"
    :color="color"
    :depressed="depressed"
    :icon="icon"
    :outlined="outlined"
    :plain="plain"
    :rounded="rounded"
    :type="type"
    :fab="fab"
    :dark="dark"
    :text="text"
    :block="block"
    :disabled="disabled"
    :large="large"
    :loading="loading"
    :small="small"
    :x-large="xLarge"
    :x-small="xSmall"
    :link="link"
    :to="to"
    :nuxt="nuxt"
    :href="href"
    :width="width"
    :height="height"
    :title="title"
    class="text-body-1 text-capitalize font-weight-thin"
    :class="
      underline ? 'text-decoration-underline pa-0' : removePadding ? 'pa-0' : ''
    "
    @click.native="$emit('click', $event)"
  >
    <v-icon
      v-if="iconName"
      :left="
        !(fab || icon) && getDir($i18n.locale) && getDir($i18n.locale) === 'ltr'
      "
    >
      {{ iconName }}
    </v-icon>

    <!-- custom icon here -->
    <slot />

    {{ !(fab || icon) ? label : '' }}
  </v-btn>
</template>
