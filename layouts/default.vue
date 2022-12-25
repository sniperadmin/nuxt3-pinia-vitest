<script lang="ts" setup></script>

<template>
  <v-layout>
    <MoleculesNAppBar />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>
