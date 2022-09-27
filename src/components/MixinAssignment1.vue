<template>
  <h2>Example for mixins {{ sub }}</h2>
  <button @click="subtract">subtraction</button>
</template>

<script>
import example1Mixin from "../mixins/ExampleMixin1";
export default {
  mixins: [example1Mixin(20, 20)],
};
</script>

<style></style>
