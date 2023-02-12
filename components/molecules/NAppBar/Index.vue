<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';

const props = defineProps({
  solo: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();
const { setLocale, locale, locales } = useI18n();

const languageStore = useLanguageStore();
// states need to be reactive
const { languages } = storeToRefs(languageStore);

const localeSelection = ref(locale.value);

watch(localeSelection, async (newLocale) => {
  let to = useLocalizedPath(route.fullPath, newLocale);
  // Handle special index page (overwritten route in `nuxt.config.ts`)
  if (route.path === '/') to = `/${newLocale}`;
  else if (to === `/${defaultLocale}`) to = '/';
  router.push(to);
});
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <v-img src="/nash-logo.png" width="100" />
    </v-app-bar-title>

    <template v-slot:append>
      <v-select
        v-model="localeSelection"
        :items="locales"
        :solo="solo"
        flat
        class="mt-5"
        item-text="raw.name"
        item-value="raw.code"
        full-width
        :menu-props="{ bottom: true, offsetY: true }"
      >
        <template #item="{ item }">
          <v-list-item dense @click="setLocale(item.raw)">
            <v-img
              max-width="100%"
              max-height="100%"
              :src="item.raw.flag"
              contain
            />
            <v-list-item-title
              :class="item.raw === 'ar' ? 'atom-font__arabic' : ''"
            >
              {{ item.raw === 'ar' ? 'العربية' : item.raw }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <template #selection="{ item }">
          <v-list-item dense class="pa-0">
            <!-- <v-img
              max-width="100%"
              max-height="100%"
              :src="item.raw"
              contain
            /> -->
            <v-list-item-title class="text-body-2 font-weight-bold">
              <!-- {{
                item.raw.name.toLowerCase() === 'arabic'
                  ? 'العربية'
                  : item.raw.name
              }} -->
              {{ locale }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-select>
    </template>
  </v-app-bar>
</template>
