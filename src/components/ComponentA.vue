<template>
  <h1>Local filter=> username in uppercase :{{ upperCaseFilter }}</h1>
  <h1>username:{{ userName }}</h1>
  <h2>Currency in Rs:{{ amount }}</h2>
  <h2>Global Filter=>Currency in USD:{{ $filters.currencyUSD(amount) }}</h2>
</template>

<script>
export default {
  data() {
    return {
      userName: "jonny lever",
      amount: 20000,
    };
  },
  computed: {
    upperCaseFilter() {
      return this.userName.toUpperCase();
    },
  },
};
</script>

<style></style>
