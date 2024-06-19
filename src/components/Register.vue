<template>
  <div class="form-signin w-50 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal text-center">Please Register</h1>
      <Input :label="'Your name'" :type="'text'" :placeholder="'Name'" />
      <Input :label="'Email address'" :type="'email'" :placeholder="'email'" />
      <Input :label="'Pasword'" :type="'password'" :placeholder="'Password'" />
      <Button type="submit" :disabled="isLoading" @click="handlerIsLoading">Register</Button>
    </form>
  </div>
</template>
<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
  methods: {
    handlerIsLoading(e) {
      e.preventDefault();
      const data = {
        username: "Abdullayev....",
        email: "abdullayev@omadbek.comsa",
        password: "12345678o....",
      };
      this.$store
        .dispatch("register", data)
        .than((user) => console.log("User", user))
        .catch((err) => console.log("Error", err));
    },
  },
};
</script>
<style></style>
