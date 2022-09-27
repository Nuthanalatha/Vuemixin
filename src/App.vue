<template>
  <!-- <component-one /> -->
  <!-- <component-two />
  <component-a /> -->
  <base-card
    mobileName="MOTOROLA g82 5G(White Lily,128 GB )(6 GB RAM)"
    rating="4.1"
    mobilePrice="16500"
  /><br />
  <base-card
    mobileName="Samsung Galaxy F13(Nightsky Green ,64 GB)(4 GB RAM)"
    rating="3.1"
    mobilePrice="6500"
  />
  <mixin-assignment />
  <mixin-assignment-1 />
  <mixin-assignment-2 />
</template>

<script>
import BaseCard from "./components/BaseCard.vue";
import MixinAssignment from "./components/MixinAssignment.vue";
import MixinAssignment1 from "./components/MixinAssignment1.vue";
import MixinAssignment2 from "./components/MixinAssignment2.vue";
// import ComponentA from "./components/ComponentA.vue";
// import ComponentOne from "./components/ComponentOne.vue";
// import ComponentTwo from "./components/ComponentTwo.vue";
export default {
  name: "App",
  components: {
    // ComponentOne,
    // ComponentTwo,
    // ComponentA,
    BaseCard,
    MixinAssignment,
    MixinAssignment1,
    MixinAssignment2,
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
