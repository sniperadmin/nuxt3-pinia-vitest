<template>
  <h3>Numerology</h3>

  <v-text-field v-model="inputValue" label="Write characters here" dense />
  <p>
    Total Energy Number (
    <span v-for="(char, i) in inputValue.split('')">
      {{ char }}
      <b v-if="i !== inputValue.length - 1"> + </b> </span
    >):
    {{ total }}
  </p>
  <p>Final Decoded Number: {{ decoded }}</p>
</template>

<script lang="ts" setup>
const letterValues = {
  أ: 1,
  ا: 1,
  ى: 1,
  ء: 1,
  ئ: 1,
  ب: 2,
  ج: 3,
  د: 4,
  ه: 5,
  ة: 5,
  و: 6,
  ؤ: 6,
  ز: 7,
  ح: 8,
  ط: 9,
  ي: 10,
  ك: 20,
  ل: 30,
  م: 40,
  ن: 50,
  س: 60,
  ع: 70,
  ف: 80,
  ص: 90,
  ق: 100,
  ر: 200,
  ش: 300,
  ت: 400,
  ث: 500,
  خ: 600,
  ذ: 700,
  ض: 800,
  ظ: 900,
  غ: 1000,
  A: 1,
  a: 1,
  J: 1,
  j: 1,
  S: 1,
  s: 1,
  T: 2,
  t: 2,
  K: 2,
  k: 2,
  B: 2,
  b: 2,
  U: 3,
  u: 3,
  L: 3,
  l: 3,
  C: 3,
  c: 3,
  V: 4,
  v: 4,
  M: 4,
  m: 4,
  D: 4,
  d: 4,
  W: 5,
  w: 5,
  N: 5,
  n: 5,
  E: 5,
  e: 5,
  X: 6,
  x: 6,
  O: 6,
  o: 6,
  F: 6,
  f: 6,
  Y: 7,
  y: 7,
  P: 7,
  p: 7,
  G: 7,
  g: 7,
  Z: 8,
  z: 8,
  Q: 8,
  q: 8,
  H: 8,
  h: 8,
  R: 9,
  r: 9,
  I: 9,
  i: 9,
};

const inputValue = ref('');
const total = ref(0);
const decoded = ref(0);

watch(inputValue, (newVal, oldVal) => {
  handleInput(newVal);
});

const handleInput = (value) => {
  let arr = [];
  if (value.length)
    value.split('').forEach((letter) => {
      console.log(letterValues[letter]);
      arr.push(letterValues[letter]);
    });
  const totalSum = arr.reduce((partialSum, acc) => partialSum + acc, 0);
  total.value = totalSum;

  if (totalSum.toString().length) {
    decoded.value = totalSum
      .toString()
      .split('')
      .map(Number)
      .reduce((p, acc) => p + acc, 0);
  }
};
</script>
