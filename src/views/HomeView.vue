<template>
  <h1>Count {{ counter }}</h1>
  <Button @click="incrementHandler">Increment</Button>
  <Button @click="decrement">Decrement</Button>
  <Button @click="reset">Reset</Button>
</template>
<script>
export default {
  name: "home",
  methods: {
    incrementHandler() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("dec");
    },
    reset() {
      this.$store.commit("reset");
    },
  },
  computed: {
    counter() {
      return this.$store.state.count;
    },
  },
};
</script>
<style lang=""></style>
