<template>
  <h1>Counter 2 : {{ counter }}</h1>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <button @click="reset">Reset</button>
</template>

<script>
import counterMixins from "../mixins/CounterMixins";

export default {
  //   data() {
  //     return {
  //       counter: 0,
  //     };
  //   },
  //   methods: {
  //     increment() {
  //       this.counter += 5;
  //     },
  //   },
  mixins: [counterMixins(10, 50)],
};
</script>

<style></style>
