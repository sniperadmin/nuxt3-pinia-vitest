<script lang="ts">
// import { useDisplay } from 'vuetify';
// const { mobile } = useDisplay();
</script>

<template>
  <v-row justify="center">
    <v-col cols="6" class="d-flex align-center">
      <div class="text-center text-md-left">
        <v-chip small class="bg-dark" text-color="white">
          Creating Brands
        </v-chip>
        <h2 class="font-weight-bold text-uppercase white--text">
          I use science to bring leisure to startups
        </h2>
        <p class="white--text op-8 font-weight-regular">
          Pellentesque vehicula eros a dui pretium ornare. Phasellus congue vel
          quam nec luctus.In accumsan at eros in dignissim. Cras sodales nisi
          nonn accumsan.
        </p>
        <div class="mt-16 pt-2">
          <NBtn
            nuxt
            large
            rounded
            label="Do you Need Help ?"
            class="btn-custom-md"
            depressed
            color="white"
            elevation="0"
          />
        </div>
      </div>
    </v-col>
    <v-col cols="6">
      <v-img
        src="/3d-business-man-standing-with-laptop-and-coffee.png"
        alt="banner"
        width="250"
      />
    </v-col>
  </v-row>
</template>

<style lang="scss"></style>
