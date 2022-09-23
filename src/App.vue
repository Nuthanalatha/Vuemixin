<template>
  <component-one />
  <component-two />
  <component-a />
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentOne from "./components/ComponentOne.vue";
import ComponentTwo from "./components/ComponentTwo.vue";
export default {
  name: "App",
  components: {
    ComponentOne,
    ComponentTwo,
    ComponentA,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
