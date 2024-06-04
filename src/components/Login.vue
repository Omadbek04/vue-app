<template>
  <section class="form-signin w-50 mt-5 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>

      <Input :type="'email'" :label="'Email address'" :placeholder="'email'"/>
      <Input :type="'password'" :label="'Password'" :placeholder="'password'"/>
      <Button type="submit">Sign in</Button>

    </form>
  </section>
</template>
<script>
export default {};
</script>
<style></style>