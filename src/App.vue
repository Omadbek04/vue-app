<template lang="">
    <Navbar />
    <RouterView/>

</template>
<script>
import { Navbar } from "./components";
import { RouterView } from "vue-router";
export default {
  components: {
    Navbar,
    RouterView
  },
};
</script>
<style lang=""></style>
