<template>
  <h2>Example for mixins {{ add }}</h2>
  <button @click="adding">Addition</button>
</template>

<script>
import exampleMixin from "../mixins/ExampleMixin";
export default {
  mixins: [exampleMixin("nuthana", "t g")],
};
</script>

<style></style>
